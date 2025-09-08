import { User } from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password, rollNo, role } = req.body;

    if (!name || !email || !password || !rollNo || !role ) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).json({
        success: false,
        message: "User Already exist, please Login",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      rollNo,
      role:role.toLowerCase(),
    });

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    let tokenData;

    
    if (role.toLowerCase() === "student") {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User does not exist",
        });
      }

      const isMatched = await bcrypt.compare(password, user.password);

      if (!isMatched) {
        return res.status(401).json({
          success: false,
          message: "Password is Incorrect",
        });
      }

      
      tokenData = { _id: user._id, role: user.role.toLowerCase(), name: user.name,email:user.email };
    } else {
      let envPassword;

      if (role.toLowerCase() === "hod") {
        envPassword = process.env.HOD_PASSWORD;
      } else if (role.toLowerCase() === "warden") {
        envPassword = process.env.WARDEN_PASSWORD;
      } else if (role.toLowerCase() === "security") {
        envPassword = process.env.SECURITY_PASSWORD;
      }

      if (!envPassword) {
        return res.status(401).json({
          success: false,
          message: "Invalid",
        });
      }

      if (envPassword !== password) {
        return res.status(401).json({
          success: false,
          message: "Password does not match",
        });
      }

      tokenData = { _id: email, role:role.toLowerCase() };
    }

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Login Successfully",
        token,
      });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(201).json({
      success: true,
      message: "Logout Successfully",
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
