
const mongoose = require('mongoose');

const post = new mongoose.Schema({
    "firstName": { type: String, required: true },
    // "lastName": { type: String,required: true },
    "image" : { type: String},
    "commentMessage":{type:Array},
    "totalLike":{type:Number, required:true},
    "descripctions": { type:String},
    "postCreatedTime": { type:String },
    "totalComment":{type:Number},
    "nameOfOrganization": { type:String },
    "commentStatus" : { type:Boolean  },
    "showCommentInput" : { type:Boolean  },
    "share":{type:Number},
    "id":  { type:String },
});

module.exports = mongoose.model('posts', post);