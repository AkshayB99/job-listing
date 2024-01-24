const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// user registration
exports.createUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({
        errorMessage: "Bad Request",
      });
    }

    const isExistingUser = await User.findOne({ email: email });
    if (isExistingUser) {
      return res.status(409).json({
        message: "user alerady exists",
      });
    }

    const isExistingMobile = await User.findOne({ mobile: mobile });
    if (isExistingMobile) {
      return res.status(409).json({
        message: "user mobile number alerady exists",
      });
    }

    const hashedPassword = await bcrypt.has(password, 10);

    const userData = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    const userResponse = userData.save();

    const token = await jwt.sign(
      { userId: userResponse._id },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      status: "success",
      message: "user register successfully",
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
