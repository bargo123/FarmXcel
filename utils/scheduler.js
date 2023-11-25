const { getMessaging } = require("firebase-admin/messaging");
const { getAllSeasons ,updateLifeCycle} = require("../controllers/season");
const { getFcmTokenForUser } = require("../controllers/fcm");
const schedule = require('node-schedule');
const moment = require('moment');
const startScheduler = async () => {
    
    
    schedule.scheduleJob('0 * * * *', async () => {
    const allSeasons = await getAllSeasons();
    allSeasons.forEach(async userSeason => {
        const userToken = await getFcmTokenForUser(userSeason.userID);
        userSeason.seasons.forEach(async season => {
            const currentDate = moment(new Date);
            const isDateActive = currentDate.isAfter(season.fromDate) && currentDate.isBefore(season.ToDate);
            if (isDateActive) {
                await getMessaging().send({
                    notification: { title: 'Farmxcel', body: 'Notification Text For Farmxcel' },
                    token: userToken
                });
                await updateLifeCycle(season._id)
            }
        });
        });
    });
}

module.exports = { startScheduler };

