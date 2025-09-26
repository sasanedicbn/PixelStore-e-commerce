import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserModel from "../../model/user.js";
// import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import ProductsModel from "../../model/products.js";

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
      const token = generateToken(user.id);
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.status(201).json({
        _id: user.id,
        name: user.name,
        country: user.country,
        email: user.email,
        country: user.country,
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
  const user = await UserModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user.id);
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      country: user.country,
    });
  } else {
    res.status(400).json("Invalid credentials");
  }
};
export const getMe = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const { _id, name, email, country } = req.user;

    res.status(200).json({
      id: _id,
      name,
      email,
      country,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Logout user
export const logoutUser = (req, res) => {
  res.clearCookie("jwt");
  res.json({ success: true, message: "Logged out successfully" });
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
    const user = await UserModel.findById(req.user.id).populate("favourites");

    if (!user) {
      return res.status(404).json({ message: "User is not found" });
    }

    if (!user.favourites || user.favourites.length === 0) {
      return res.status(200).json({ favourites: [] });
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

export const getUserCart = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).populate({
      path: "cart.product",
      model: "Product",
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.cart || user.cart.length === 0) {
      return res.status(200).json({ cart: [] });
    }

    res.status(200).json({ cart: user.cart });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ success: false, message: "Cart is not sent" });
  }
};

export const addProductToCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "You shoyld be logged in" });
    }
    const productInfo = await ProductsModel.findById(productId);
    if (!productInfo) {
      return res.status(404).json({ message: "Product not found" });
    }
    const productInCart = user.cart.find(
      (item) => item.product.toString() === productInfo._id.toString()
    );
    if (productInCart) {
      productInCart.quantity++;
    } else {
      user.cart.push({ product: productInfo.id, quantity: 1 });
    }
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "Product added to cart", user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Product is not added to cart" });
  }
};
export const updateProductInCart = async (req, res) => {
  const { productId } = req.params;
  const { type } = req.body;

  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "You should be logged in" });
    }

    const productInCart = user.cart.find(
      (item) => item.product.toString() === productId.toString()
    );

    if (!productInCart) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    if (type === "increment") {
      productInCart.quantity++;
    } else if (type === "decrement") {
      productInCart.quantity--;
      if (productInCart.quantity <= 0) {
        user.cart = user.cart.filter(
          (item) => item.product.toString() !== productId.toString()
        );
      }
    } else {
      return res.status(400).json({ message: "Invalid type" });
    }

    return res.status(200).json({
      success: true,
      message: "Cart updated",
      cart: user.cart,
    });
  } catch (error) {
    console.error("Error updating cart:", error);
    return res
      .status(500)
      .json({ success: false, message: "Cart is not updated" });
  }
};
export const addProductInFavourites = async (req, res) => {
  const { productId } = req.body;
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      res.status(404).json({ message: "You should be logged in" });
    }
    const productInfo = await ProductsModel.findById(productId);
    if (!productInfo) {
      res.status(404).json({ message: "Product not found" });
    }
    const productInFavorutes = user.favourites.find(
      (item) => item.toString() === productInfo._id.toString()
    );
    if (productInFavorutes) {
      user.favourites = user.favourites.filter(
        (item) => item.toString() !== productInfo._id.toString()
      );
    } else {
      user.favourites.push(productInfo._id);
    }
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "Product added to favourites", user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Product is not added to favourites" });
  }
};
