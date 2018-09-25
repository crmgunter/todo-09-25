require("dotenv").config();
const mongoose = require('mongoose')

// Spencer's dumb ass code

// if (process.env.MONGODB_URI) {
//     mongoose.connect(process.env.MONGODB_URI)
// } else {
//     mongoose.connect('mongodb://localhost/instructor-mern')
// }

// mongoose.connection.once('open', () => {
//     console.log(`Mongoose has connected to MongoDB`)
// })

// mongoose.connection.on('error', (error) => {
//     console.error(`MongoDB connection error!!! ${error}`)
//     process.exit(-1)
// })

const User = require("../models/user");
const Idea = require("../models/idea");

const mars = new Idea({
  title: "Fly to Mars",
  description: "Earth isn't red enough. Let's move."
});
const tesla = new Idea({
  title: "Build a Car",
  description:
    "Gas is too expensive. I'm gonna build a car that doesn't need gas"
});
const elon = new User({
  userName: "elon_musk",
  password: "spaceiscool",
  ideas: [mars, tesla]
});

User.remove({})
  .then(() => elon.save())
  .then(() => console.log("Successful Save"))
  .then(() => mongoose.connection.close());
