const User = require("../models/User");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const {email} = req.body
  const user = await User.create({ ...req.body});
  const token = user.generateToken();
  res.status(201).json(user);
};

const login = async(req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw "Please provide your account info";
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw "User Does not exist";
  }

  const isValidPassword = await user.isValidPassword(password);
  if (!isValidPassword) {
    throw "Password not valid";
  }
  const token = user.generateToken();
  res.json({ email: email ,token:token});

};

module.exports = { registerUser, login };
