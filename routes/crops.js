const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authentication");
const {getAllCrops,uploadCrops } = require("../controllers/crops");

router.get("/getAllCrops", getAllCrops);
router.post("/uploadCrops", uploadCrops);



module.exports = router;
