const Season = require("../models/Season")
const {updateIsSeasonStarted} = require("../controllers/project")



const startSeason = async (req, res) => {
  
    const existingSeason = await Season.findOne({ projectID: req.body.projectID });
    if (!existingSeason) {
        var createSeason = await Season.create({...req.body});
        res.status(200).json({createSeason});
        return;
    }

    const updatedSeason = await Season.findOneAndUpdate(
        { projectID: req.body.projectID },
        { "$push": { seasons: req.body.seasons } },
        { new: true }
    );

    res.status(200).json({updatedSeason});
}

const updateLifeCycle = async (seasonID,lifeCycle) => {
  await Season.findByIdAndUpdate({_id:seasonID},{lifeCycle});
}

const getAllSeasons = async (req, res) => {
    const season = await Season.find();
    return season;
}
const getAllSeasonsApi = async (req, res) => {
    const season = await Season.find();
    if (!season) {
        res.status(500).json("something Went Wrong");
    }
    res.status(200).json(season);
    return season;
}
const getSeasonByID = async (req, res) => {
    const season = await Season.findOne({projectID:req.query.projectID});
    if (!season) {
        res.status(500).json("something Went Wrong");
    }
    res.status(200).json(season);
}

const deleteSeason = (req, res) => {
}

module.exports = { startSeason, deleteSeason,getAllSeasons,getAllSeasonsApi,updateLifeCycle,getSeasonByID};