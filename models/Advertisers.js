const mongoose = require("mongoose")
const AdvertisersSchema = new mongoose.Schema({
    ids:Array,
    ingredients: String,
    name: String,
    brand:String,
    distributor: String,
    representativeName: String,
    representativeNumber: String,
  });
module.exports = mongoose.model('Advertisers', AdvertisersSchema);;

