
const Crops = require("../models/Crops")
const getAllCrops = async (req,res) => {
    var crops = await Crops.find();
    if (!crops) {
        res.status(400).json({msg:" No crops where found"});
    } else {
        res.status(200).json(crops[0]);
    }
}

const uploadCrops= async (req, res) => {
    var { crops } = req.body;
    if (!crops) {
        return res.status(500).json({msg:" please add crops"});
    }
    
    console.log(`Crops ${crops}`)
    var crops = await Crops.create({crops});
    return res.status(200).json({msg:"Crop upload successfully "});

}



module.exports = {getAllCrops,uploadCrops}