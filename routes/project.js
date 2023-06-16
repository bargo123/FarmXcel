const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authentication");
const { submitProject,getAllProjects } = require("../controllers/project");

router.post("/submitProject", verifyToken, submitProject);
router.get("/getAllProjects", verifyToken, getAllProjects);
// router.post("/startSeason",verifyToken, getAllProjects);



module.exports = router;
