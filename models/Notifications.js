const mongoose = require("mongoose");

const Notifications = mongoose.Schema({
    tag: {
     type:String,
     required:true,
    },
    day: {
        type:Number,
        required:true,
       },
    message: {
        type:String,
        required:true,
    },
});


const NotificationsSchema = mongoose.Schema({
    cropName: {
        type:String,
        required:true,
        },
    notifications:[Notifications]
})

module.exports = mongoose.model("Notifications", NotificationsSchema);

