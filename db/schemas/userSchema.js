const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ideaSchema = require('./ideaSchema')

const userSchema = new Schema ({
    name: String,
    password: String,
    ideas: [ideaSchema]
})

module.exports = userSchema