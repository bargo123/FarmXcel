const express = require("express");
const router = express.Router();
const {setFcmToken} = require("../controllers/fcm");
const authenticateUser = require("../middleware/authentication");
router.post("/setFcmToken", authenticateUser,setFcmToken);
router.post("/setFcmToken", authenticateUser,setFcmToken);
module.exports = router;
