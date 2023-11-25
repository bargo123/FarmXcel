const User = require("../models/User");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.generateToken();
  res.status(201).json({user:user,token:token});
};

const login = async (req, res) => {
  console.log("login1")
  
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("login2")
    throw "Please provide your account info";

  }
  const user = await User.findOne({ email });
  if (!user) {
    console.log("login4")
    throw "User Does not exist";

  }

  const isValidPassword = await user.isValidPassword(password);
  if (!isValidPassword) {
    console.log("login3")
    throw "Password not valid";
  }
  const token = user.generateToken();
  res.json({ user: user ,token:token});

};

module.exports = { registerUser, login };
