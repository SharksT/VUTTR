const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

const server = require("http").Server(app);

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-tejxt.mongodb.net/desafio?retryWrites=true",
  {
    useNewUrlParser: true
  }
);
mongoose.set("useCreateIndex", true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

server.listen(process.env.PORT || 3000);
