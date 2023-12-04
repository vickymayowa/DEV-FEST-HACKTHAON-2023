const asyncHandler = require("express-async-handler");
const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const generateToken = require("../utils/generateToken.js");

// @desc Regsiter user token
// route POST /api/users/regsiter
// @access Public
const register = asyncHandler(async (req, res) => {
  const form = new userModel({
    fullname: req.body.fullName,
    username: req.body.userName,
    email: req.body.email,
    phone: req.body.phoneNumber,
    address: req.body.address,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    password: req.body.password,
    currentDevice: req.body.currentDevice,
  });
  try {
    const userExists = await userModel.findOne({ email: req.body.email });

    switch (true) {
      case Boolean(userExists):
        res.status(400).json({ message: "User Already Exists" });
        break;

      case Boolean(await form.save()):
        const user = await userModel.findOne({ email: req.body.email });
          if (error) {
            res.status(500).json({ message: "Unable To Register" });
            console.log(error.mes);
          } else {
            res.status(201).json({ message: "Registered Successfully", user });
          }
        break;
      default:
        res.status(400).json({ message: "Unable To Register" });
        break;
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid user data" });
    console.log(error);
  }
});

// @desc Verify Email
// route POST /api/users/verify-email/
// @access Public
const verifyemail = asyncHandler(async (req, res) => {
  const token = req.params.token;
  // console.log(token)
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    await userModel.findOneAndUpdate(
      { email: decoded.email },
      { $set: { emailVerified: true } }
    );
    res.send({ message: "Email verified successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Invalid or expired token");
  }
});

// @desc Login User/token
// route POST /api/users/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  if (!user) {
    return handleLoginError(res, "User Not Found", 401);
  }
  switch (true) {
    case !user.emailVerified:
      return handleLoginError(
        res,
        "Account not verified. Check your email for the verification link.",
        401
      );
    case user && (await user.matchPassword(password)):
      generateToken(res, user._id);
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.send({ success: true, message: "Login successful", token, user });
      break;
    default:
      return handleLoginError(res, "Invalid Username or password", 401);
  }
});
const handleLoginError = (res, message, status) => {
  res.status(status);
  throw new Error(message);
};

// @desc Logout User/token
// route POST /api/users/Logout
// @access Public
const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

const sendResetToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new Error("No User Found");
  }
  const token = crypto.randomBytes(32).toString("base64");
  const resetUrl = `http://localhost:5173/reset_password/?email=${user.email}&token=${token}`;
  const message = `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="text-align: center; padding-bottom: 20px;">
      <h1 style="color: #333; font-size: 28px; margin-bottom: 10px;">Reset Password</h1>
      <p style="color: #666; font-size: 16px;">Dear ${email}, please ignore this email and your password will remain unchanged.</p>
    </div>

    <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <p style="color: #333; font-size: 16px;">You are receiving this email because you (or someone else) has requested
      the reset of a password for your account. Please click on the following link to reset your password </p>
      <a style="display: inline-block; padding: 10px 20px; background-color: #3490dc; color: #fff; text-decoration: none; border-radius: 4px; margin-top: 10px;"class="verification-link" href=${resetUrl}>Reset Password</a>
    </div>

    <div style="text-align: center; padding-top: 20px;">
    <p style="color: #666; font-size: 16px;">If you did not sign up for our website, please ignore this email.</p>
    </div>
    </div>
    `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: req.body.email,
    subject: "Account Reset Password",
    html: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw new Error("Email could not be sent");
    } else {
      res.send({ message: "Email Sent SuccessFully" });
    }
  });

  user.resetToken = token;
  await user.save();
});

const UpdatePassword = asyncHandler(async (req, res) => {
  let query = {
    resetToken: req.query.token,
    email: req.query.email,
  };
  const user = await userModel.findOne(query);
  if (user) {
    user.password = req.body.newPassword;
  }
  user.save();
});

const BookAppointment = asyncHandler(async (req, res) => {
  const booking = {
    patientName: req.body.fullName,
    patientPhoneNumber: req.body.phoneNumber,
    patientAge: req.body.age,
    dateOfBirth: req.body.dob,
    gender: req.body.gender,
    address: req.body.address,
    status: "pending",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  try {
    const result = await bookingsModel.create(booking);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});
module.exports = {
  register,
  login,
  verifyemail,
  sendResetToken,
  UpdatePassword,
  logout,
  BookAppointment,
  // getAllUsers,
};

// Frontend Cliek forgot password -  send post request to /sendResetToken
// OOnclick or reset buttton in email frontend.com/reset_password/?email=useraema&token=token
