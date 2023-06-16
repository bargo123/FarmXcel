require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require("./db/connect");
//routes 
const authRoute = require('./routes/auth');
const projectsRoute = require('./routes/project');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/projects",projectsRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
