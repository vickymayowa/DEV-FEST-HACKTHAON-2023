const { register } = require("../controllers/doctor.controllers");
const router = require("express").Router();

router.post("/register", register);

module.exports = router;
