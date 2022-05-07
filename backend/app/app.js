const express = require('express')
const controller = require("../controller/controller")
const bodyparser = require('body-parser')
const multer = require('multer');
const path = require('path')
const cors = require('cors')
const passport = require('../passport/passport');
const upload2 =  require('../FileUpload/fileUpload')
// const postController = require('../Controllers/post')
const postController = require('../Controllers/post')
const diskstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', "images"))
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1]
        cb(null, `${Date.now()}.${ext}`)
    }
})

const upload = multer({
    storage: diskstorage
})

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(passport.initialize());

app.get('/', controller.home)

app.post('/register', controller.register)
app.post('/login', controller.login)
app.post('/saveimg', upload.single('file'), controller.saveimg)
app.get('/networkdata', controller.networkdata)
app.get('/message', controller.message)

app.get("/failed", (req, res) => {
    res.send("Failed")
})
app.get("/success", (req, res) => {
    res.send(`success`)
})

app.get('/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    })
);

app.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
    function (req, res) {
        console.log(req.body)
        // res.redirect('/success')
    }
);


app.post('/saveImage', upload2.single('file'), postController.saveImage)

app.post('/createPost', postController.createUserData)
app.get('/get-all-post', postController.getAllPost)
app.delete(`/delete/:id`, postController.deletePost)
module.exports = app