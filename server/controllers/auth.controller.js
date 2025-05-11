import bcrypt from 'bcryptjs'
import User from '../models/user.models.js'
import { generateToken } from '../lib/utils.js'

export const register = async (req, res) => {
    const { firstname, lastname, username, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        return res.status(400).json({ message: "Password do not match" })
    }

    if (password.length < 8) {
        return res.status(400).json({ message: "Password must have atleast 8 characters" })
    }

    const existEmail = await User.findOne({email});

    if (existEmail) return res.status(400).json({ message: "Email already exist" })

    const existUsername = await User.findOne({username});

    if (existUsername) return res.status(400).json({ message: "Username already exist" })

    const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        firstname,
        lastname,
        username,
        email,
        password: hashPassword
    })

    if (newUser) {
        generateToken(newUser._id, res);
        await newUser.save();

        res.status(201).json({ message: "User has been created" })
    } else {
        res.status(400).json({ message: "Invalid User Data" })
    }
}