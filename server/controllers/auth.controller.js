import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import { generateToken } from "../lib/utils.js";

export const register = async (req, res) => {
  try {
    const { firstname, lastname, username, email, password, confirm_password } =
      req.body;

    if (password !== confirm_password) {
      return res.status(400).json({ message: "Password do not match" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must have atleast 8 characters" });
    }

    const existEmail = await User.findOne({ email });

    if (existEmail)
      return res.status(400).json({ message: "Email already exist" });

    const existUsername = await User.findOne({ username });

    if (existUsername)
      return res.status(400).json({ message: "Username already exist" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({ message: "User has been created" });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user)
      return res
        .status(400)
        .json({ message: "Username or Password is incorrect" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ message: "Username or Password is incorrect" });

    generateToken(user._id, res);

    res.status(200).json({ message: "Login Successfully" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: error.message });
  }
};
