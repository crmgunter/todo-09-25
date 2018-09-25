require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const UsersController = require('./controllers/users')
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose Connected Successfully");
});

// If the connection throws an error
connection.on("error", err => {
  console.log("Mongoose default connection error: " + err);
});

// allow-cors
// app.use(function(req,res,next){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// })

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use(express.static(__dirname + "/client/build/"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});
app.use('/api/users', UsersController)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
});
