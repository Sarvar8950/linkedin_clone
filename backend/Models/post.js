
const mongoose = require('mongoose');

const post = new mongoose.Schema({
    "firstName": { type: String, required: true },
    "lastName": { type: String,required: true },
    "image" : { type: String}
});

module.exports = mongoose.model('user_datas', post);