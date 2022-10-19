// imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const userRoute = require("./routes/user");

// other constants
dotenv.config();
const PORT = process.env.PORT;

// server configuration
const app = express();
app.listen(PORT, () => {
  console.log(`Server is running PORT ${PORT}`.yellow.bold);
});

app.use(express.json());

// API End Points
app.use("/api/users", userRoute);

// setting mongoose
mongoose
  .connect(`${process.env.MONGOOSE_CONNECT}`)
  .then(() => {
    console.log("DB Connection successful".brightCyan.bold);
  })
  .catch((err) => {
    console.log(err.message);
  });
