import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserModel from "../../model/user.js";
// import asyncHandler from "express-async-handler";

export const registerUser = async (req, res) => {
  const { name, email, password, country } = req.body;

  if (!name || !email || !password || !country) {
    return res.status(400).json({ message: "Please add all fields" });
  }

  try {
    const userExisting = await UserModel.findOne({ email });
    if (userExisting) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create user
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      country,
      confirmPassword: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        country: user.country,
        email: user.email,
      });
    } else {
      res.status(400).json("Invalid user data");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password, "login");
  const user = await UserModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json("Invalid credentials");
  }
};
export const getMe = async (req, res) => {
  res.json({ msg: "Hello from registerUser" });
};
