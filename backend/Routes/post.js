
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');

const upload2 = require('../FileUpload/fileUpload');
const postController = require('../Controllers/post')
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json([]));


app.post('/saveImage', upload2.single('file'), postController.saveImage)

app.post('/createPost', postController.createUserData)
app.get('/get-all-post', postController.getAllPost);
app.delete("/delete/:id",  postController.deletePost)
// app.delete('/user/:userId', userController.deleteUser);


module.exports=app
