const mongoose = require("mongoose");

const FCMSchema = mongoose.Schema({

  userID: {
    type: String,
    required:true
  },
  fcmToken: {
    type:String,
    required: true

  }
});

module.exports = mongoose.model("FCM", FCMSchema);

