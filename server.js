const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/seedapi", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});

requireDir("./src/models");

require("./src/controllers/AuthController")(app);

app.use("/api", require("./src/routes"));
app.listen(3001);
