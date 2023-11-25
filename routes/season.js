const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authentication");
const { startSeason,getAllSeasons,getAllSeasonsApi } = require("../controllers/season");
router.post("/startSeason", verifyToken, startSeason);
router.get("/getSeasons", verifyToken, getAllSeasons);
router.get("/getSeasonsApi", verifyToken, getAllSeasonsApi);

module.exports = router;
