const mongoose = require("mongoose")

const Articles = mongoose.Schema({
  articleName: {
   type:String,
   required:true,
  },
  articleUrl: {
      type:String,
      required:true,
  },
 
});
const userNotificationsSchema = new mongoose.Schema({
  projectID: String,
  userID: String,
  notificationID: String,
  date:Date,
  message: String,
  day: Number,
  tag:String,
  crop: String,
  articles:[Articles]
});

module.exports = mongoose.model('UserNotifications', userNotificationsSchema);;

