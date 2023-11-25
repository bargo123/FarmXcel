const mongoose = require("mongoose")
const countrySchema = new mongoose.Schema({
    name: String,
    segments: Array,
  });
  
 
module.exports = mongoose.model('Country', countrySchema);;

