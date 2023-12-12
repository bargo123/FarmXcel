const UserNotification = require('../models/User_notification')
const getNotificationByUserID = async (req, res) => {
    console.log(req.query)
    const userNotifications = await UserNotification.find({ userID: req.query.userID, tag: req.query.tag })
   res.status(200).json({userNotifications})
}

const storeUserNotifications = async (notification) => {
    const userNotifications = await UserNotification.create(notification)
   console.log("Notification Stored")
}

module.exports = {getNotificationByUserID,storeUserNotifications}