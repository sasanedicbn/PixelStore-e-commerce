import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserModel from "../../model/user.js";
// import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";

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
        token: generateToken(user.id),
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
      token: generateToken(user.id),
    });
  } else {
    res.status(400).json("Invalid credentials");
  }
};
export const getMe = async (req, res) => {
  const { _id, name, email, country } = await UserModel.findById(
    "689b579224c60577df0bd643"
  );

  if (!name) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    id: _id,
    name,
    email,
    country,
  });
};
// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
// WRITE US
// export const sendMessageUser = async (req, res) => {
//   const { phone, message } = req.body;
//   const userId = req.user.id;
//   try {
//     const existingUser = await UserModel.findById({ userId });
//     if (!existingUser)
//       res.status(404).message("User not found, please log in.");

//     const { name, email } = existingUser;
//     res.status(200).json({
//       name,
//       email,
//       phone,
//       message,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

export const sendMessageUser = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "You should fill all input fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your message!",
      text: `Hello ${name},\n\nThank you for contacting us. We will get back to you shortly.\n\nBest regards,\nYour team`,
    });

    res.json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ success: false, message: "Email is not sent." });
  }
};

export const getUserFavourites = async (req, res) => {
  try {
    const user = await UserModel.findById("689b579224c60577df0bd643").populate(
      "favourites"
    );

    if (!user) {
      return res.status(404).json({ message: "User is not found" });
    }

    if (!user.favourites || user.favourites.length === 0) {
      return res.status(404).json({ message: "User doesn't have favourites" });
    }

    res.status(200).json({
      favourites: user.favourites,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Favoirotes is not sent." });
  }
};
