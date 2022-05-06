
const mongoose = require('mongoose');

const post = new mongoose.Schema({
    "firstName": { type: String, required: true },
    "lastName": { type: String,required: true },
    "image" : { type: String},
    "comments":{type:Array},
    "totalLike":{type:Number, default: 0},
    "descripctions": { type:String},
    "createdAt": { type:String, default: new Date() },
});

module.exports = mongoose.model('posts', post);