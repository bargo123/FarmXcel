const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  address: {
    type: String,
    required: [true, "Please enter your project country"],
  },
  segments: {
    type: Array
   },
  userID: {
    type: String,
    required: [true, "Please enter your project city"],
  },

  numberOfGreenHouses: {
    type: Number,
  },
  
  openFieldsArea: {
    type:Number,
  },
  seasonStarted: {
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model("Projects", ProjectSchema);

