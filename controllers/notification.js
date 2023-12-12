const Notifications = require("../models/Notifications");


const uploadNotifications = async (req, res) => {
    const notification = await Notifications.create({ ...req.body });
    res.status(200).json(notification);
}
const getAllNotifications = async (req, res) => {
    const notification = await Notifications.find();
    if (!notification) {
        res.status(404).json({"msg":"Crop Not Found"});
    }
    res.status(200).json(notification);
}



const getNotificationAtDay = async (cropName,day) => {
    const result = await Notifications.findOne(
        { cropName: cropName, 'notifications.day': day },
    );
    if (!result) {
        return null;
    }
    return result[0];
}


module.exports = {uploadNotifications,getNotificationAtDay,getAllNotifications}