const mongoose = require('mongoose')
const userSchema = require('../db/schemas')

const User = mongoose.model('user', userSchema)

module.exports = User