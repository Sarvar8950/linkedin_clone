const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name : String
})

module.exports = mongoose.model('message', user)