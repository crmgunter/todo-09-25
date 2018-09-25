const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ideaSchema = new Schema({
    title: String,
    description: String,
    created: Date
})

module.exports = ideaSchema