const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db.js");
const userRoute = require("./routes/user.route.js");
const doctorRoute = require("./routes/doctor.route.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");
dotenv.config();

const PORT = process.env.PORT || 5500;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", userRoute);
app.use("/api/doctor", doctorRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
