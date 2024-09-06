const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes')
app.use(cors({origin:process.env.FRONT_END_URL}));

const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URL)

app.use('/',userRoutes)

const server = app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
