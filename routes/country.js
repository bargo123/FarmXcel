const express = require("express");
const router = express.Router();
const {getAllAreas} = require("../controllers/country");

router.get("/getCountry", getAllAreas);

module.exports = router;
