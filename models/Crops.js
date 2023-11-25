const mongoose = require('mongoose');

const segmentSchema = new mongoose.Schema({
  segmentName: {
    type: String,
    required: true
  },
  segmentLifeCycle: {
    type: Number,
    required: true
  },
  segmentStartDate: {
    type: Date,
    required: true
  },
  segmentEndDate: {
    type: Date,
    required: true
  }
});

segmentSchema.pre("save", async function (next) { 
  if (this.segmentStartDate < new Date() && this.segmentEndDate < new Date()) { 
    const currentYear = new Date().getFullYear();
    const newYear = currentYear + 1; 
    this.segmentStartDate.setFullYear(newYear);
    this.segmentEndDate.setFullYear(newYear);
  }
});

const cropSchema = new mongoose.Schema({
  cropName: {
    type: String,
    unique:true,
    required: true
  },
  cropSegments: {
    type: [segmentSchema],
    required: true
  }
});

const cropsSchema = new mongoose.Schema({
  crops: {
    type: [cropSchema],
    required: true
  }
});

const Crops = mongoose.model('Crops', cropsSchema);

module.exports = Crops;