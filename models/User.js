const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    min: 1,
    max: 20,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter your phone number"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    match: [
      /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    min: 1,
    max: 20,
  },
});

UserSchema.pre("save", async function (next) { 
  const salt = await bcryptjs.genSalt(10);
  this.password= await bcryptjs.hash(this.password, salt);
});

UserSchema.methods.generateToken =  function () {
  const token = jwt.sign({ name: this.name, id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
  return token;
};

UserSchema.methods.isValidPassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
}
module.exports = mongoose.model("User", UserSchema);

