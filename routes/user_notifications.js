const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authentication");

const {getNotificationByUserID} = require("../controllers/user_notifications");
router.get("/getNotificationByUserID", verifyToken,getNotificationByUserID);
module.exports = router;
