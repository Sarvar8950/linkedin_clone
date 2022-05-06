const http = require('http')
const app = require('./app/app')
// const app = require('./Routes/post');
connectToDB=require('./mongodb/mongodb')
// require('dotenv/config');
const PORT=8001;
http.createServer((app)).listen(PORT , () =>{
    console.log(`server is running on localhost: ${PORT}`)
    new connectToDB();
})