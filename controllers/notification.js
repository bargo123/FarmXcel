const Notifications = require("../models/Notifications");


const uploadNotifications = async (req, res) => {
    const notification = await Notifications.create({ ...req.body });
    res.status(200).json(notification);
}
const getAllNotifications = async (req, res) => {
    const { cropName } = req.query;
    const notification = await Notifications.findOne({ cropName });
    if (!notification) {
        res.status(404).json({"msg":"Crop Not Found"});
    }
    res.status(200).json(notification);
}


const getNotificationAtDate = async (req, res) => {

    // const notification = await Notifications.create({ ...req.body });
    // res.status(200).json(notification);
}


module.exports = {uploadNotifications,getNotificationAtDate,getAllNotifications}