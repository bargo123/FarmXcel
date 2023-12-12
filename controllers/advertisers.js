
const Advertisers = require("../models/Advertisers")
const getAdvertiser = async (req,res) => {
    var advertiser = await Advertisers.find({ ids: req.query.notificationID},{"ids":0});
     res.status(200).json({advertiser});

}

const uploadAdvertiser= async (req, res) => {
     var advertiserBody  = req.body;
     console.log(advertiserBody)
    if (!advertiserBody) {
         res.status(500).json({msg:" please add advertiser"});
    }
    
    var advertiser = await Advertisers.create(advertiserBody);
     res.status(200).json({msg:"Advertiser upload successfully "});

}

module.exports = {uploadAdvertiser,getAdvertiser}