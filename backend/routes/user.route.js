const {
  register,
  login,
  verifyemail,
  sendResetToken,
  UpdatePassword,
  logout,
  BookAppointment,
} = require("../controllers/user.controllers");
// const { protect } = require("../middleware/authMiddleware.js")
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/bookAppoint", BookAppointment);
router.post("/logout", logout);
router.post("/verify-email/:token", verifyemail);
router.post("/send-reset-token", sendResetToken);
router.post("/updatePassword", UpdatePassword);

module.exports = router;
