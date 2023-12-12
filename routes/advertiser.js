const express = require("express");
const router = express.Router();
const {uploadAdvertiser,getAdvertiser} = require("../controllers/advertisers");
router.get("/getAdvertiser", getAdvertiser);
router.post("/uploadAdvertiser", uploadAdvertiser);


module.exports = router;
