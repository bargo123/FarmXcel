const FCM = require("../models/FCM");
const setFcmToken = async (req, res) => {
   const { fcmToken, userID } = req.body;
    const fcm = await FCM.findOneAndUpdate(
        {userID:  userID}, 
        { $set: { "fcmToken" : fcmToken} },
        {upsert:true, new:true},  //upsert to create a new doc if none exists and new to return the new, updated document instead of the old one. 
        function(err, doc){
            if(err){
                res.status(500).send("Something wrong when updating data!");
            }
        });
    res.status(201).json({ fcm: fcm });
    
};
const getFcmTokenForUser = async (userID) => {
    const fcm = await FCM.findOne({ userID: userID })
    return fcm.fcmToken;
 };
module.exports = {setFcmToken,getFcmTokenForUser};
