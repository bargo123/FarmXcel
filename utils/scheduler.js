const { getMessaging } = require("firebase-admin/messaging");
const { getAllSeasons ,updateLifeCycle} = require("../controllers/season");
const { getFcmTokenForUser } = require("../controllers/fcm");
const { storeUserNotifications } = require("../controllers/user_notifications");
const { getNotificationAtDay } = require("../controllers/notification");



const schedule = require('node-schedule');
const moment = require('moment');
const startScheduler = async () => {
    // await storeUserNotifications({ tag: "Spraying", userID: "6562bf7ad0e17f0028b9035d", day: "99", message: "Preventive action for White fly, Thips, Aphid, Leaf miner", date: new Date, projectID: "6562bf7cd0e17f0028b9035f", crop: "Cucumber", notificationID: "64ea2bcdf4a9ab12f89b6549", articles: [{articleName:"Thrips",articleUrl:"https://en.wikipedia.org/wiki/Thrips"},{articleName:"White fly",articleUrl:"https://en.wikipedia.org/wiki/Whitefly"},{articleName:"Aphid",articleUrl:"https://en.wikipedia.org/wiki/Aphid"}]})
    schedule.scheduleJob('0 * * * *', async () => {
    const allSeasons = await getAllSeasons();
    allSeasons.forEach(async userSeason => {
        const userToken = await getFcmTokenForUser(userSeason.userID);
        userSeason.seasons.forEach(async season => {
            const currentDate = moment(new Date);
            const isDateActive = currentDate.isAfter(season.fromDate) && currentDate.isBefore(season.ToDate);
            if (isDateActive) {
                const notification = getNotificationAtDay(season.cropName,season.lifeCycle)
                await getMessaging().send({
                    notification: { title: 'Farmxcel', body: notification.message },
                    token: userToken
                });
                await storeUserNotifications({tag:notification.tag,userID:userSeason.seasons.userID,day:notification.day,message:notification.message,date:new Date,projectID:userSeason.seasons.projectID})
                await updateLifeCycle(season._id,season.lifeCycle - 1)
            }
        });
        });
    });
}

module.exports = { startScheduler };

