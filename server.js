

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


app.use(cors());

mongoose.connect(process.env.MONGODB_URI);



const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const bookRoutes = require("./routes/bookRoutes");
app.use("/api/books", bookRoutes);

const errorHandler = require("./utils/errorHandler");
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
