require('dotenv').config();

require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require("./db/connect");
//routes 
const authRoute = require('./routes/auth');
const projectsRoute = require('./routes/project');
const countryRoute = require('./routes/country');
const cropRoute = require('./routes/crops');
const seasonRoute = require('./routes/season');
const fcmRoute = require('./routes/fcm');
const advertiserRoute = require('./routes/advertiser');

const notificationRoute = require('./routes/notifications');
const userNotificationRoute = require('./routes/user_notifications');
const {startScheduler} = require('./utils/scheduler');
const {getFcmTokenForUser} = require('./controllers/fcm');
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const {getNotificationAtDay} = require('./controllers/notification');


initializeApp({
  credential: applicationDefault(),
  projectId:"farmxcel"
});


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/countries", countryRoute);
app.use("/api/v1/projects", projectsRoute);
app.use("/api/v1/crops", cropRoute);
app.use("/api/v1/season", seasonRoute);
app.use("/api/v1/user_notifications", userNotificationRoute);
app.use("/api/v1/advertisers", advertiserRoute);
app.use("/api/v1", notificationRoute);
app.use("/api/v1", fcmRoute);




app.post("/send", async(req, res)=>{ 
  const token = await getFcmTokenForUser(req.query.userID);

  res.send("Success");

})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
// startScheduler();
const port = process.env.PORT || 9000;



const start = async () => {
  try {
    
    await connectDB(process.env.MONGO_URI)
    await startScheduler();
    console.log(await getNotificationAtDay("Cucmeber",170))

    app.listen(port)
  } catch (error) {
    console.log(error);
  }
};

start();
