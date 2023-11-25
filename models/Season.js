const mongoose = require("mongoose");


const SeasonSchema = mongoose.Schema({
    cropName: {
    type:String,
    required:true,
    },
    segment: {
    type:String,
    required:true,
    },
    lifeCycle: {
    type:Number,
    required:true,
    },
    farmingType: {
    type:String,
    required:true,
    },
    greenHouse: {
    type:Number,
    },
    openField: {
    type:Number,
    },
    fromDate: {
    type:Date,
    required:true,
    },
    toDate: {
    type:Date,
    required:true,
    }

});


const SeasonsSchema = mongoose.Schema({
    userID: {
        type:String,
        required:true,
        },
    projectID: {
        type:String,
        required:true,
    },
    seasons:[SeasonSchema]
})
const Season = mongoose.model("Seasons", SeasonsSchema);
module.exports = Season;

