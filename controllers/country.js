
const Country = require("../models/Country")
const getAllAreas = async (req,res) => {
    var countries = await Country.find();
    if (!countries) {
        res.status(400).json({msg:"No countries found"});
    } else {
        res.status(200).json({countries:countries});
    }
}


module.exports = {getAllAreas}