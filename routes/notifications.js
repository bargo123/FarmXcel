const express = require("express");
const router = express.Router();
const {uploadNotifications,getAllNotifications} = require("../controllers/notification");
router.post("/uploadNotifications", uploadNotifications);
router.get("/getAllNotifications",getAllNotifications);

module.exports = router;
