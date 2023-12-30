const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authentication");
const { startSeason,getAllSeasonsApi ,getSeasonByID} = require("../controllers/season");
router.post("/startSeason", verifyToken, startSeason);
router.get("/getSeasonsApi", verifyToken, getAllSeasonsApi);
router.get("/getSeasonByID", verifyToken, getSeasonByID);


module.exports = router;
