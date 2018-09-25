const mongoose = require('mongoose')
const ideaSchema = require('../db/schemas/ideaSchema')

const Idea = mongoose.model('idea', ideaSchema)

module.exports = Idea