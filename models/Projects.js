const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  address: {
    type: String,
    required: [true, "Please enter your project country"],
  },

  userID: {
    type: String,
    required: [true, "Please enter your project city"],
  },

  numberOfGreenHouses: {
    required:true,
    type: String,
  },

  openFieldsArea: {
    required:true,
    type:String,
  },
  seasonStarted: {
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model("Projects", ProjectSchema);

