
const mongoose = require('mongoose');

class Mongo {

    constructor() {
        this.createMongoConnection();
    }
    createMongoConnection(){
        // db.createUser({user:'shiv', pwd:'shiv@123',roles:['dbOwner']})

        mongoose.connect(
            `mongodb+srv://shivling:EKVVRIZS58E0fLKm@cluster0.rqati.mongodb.net/linkedin?retryWrites=true&w=majority`
    //   `mongodb+srv://shivlingbhange2510:Shivling@123cluster0.is5o6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
        //    `mongodb+srv://shivlingbhange2510:
        //    Shivling@123@first-app-cluster.cfvzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
            // `mongodb://127.0.0.1:27017/linkedin`,
            //  {useNewUrlParser: true}
             )
        .then(()=>{
            console.log('connected succesfully')
        })
        .catch((er)=>{
            console.log('errMsg : ', er)
        })

        mongoose.connection.once('open', ()=>{
            console.log('connection establish succesfully')
        })
        mongoose.connection.on('error', ()=>{
            console.log('errr')
       
       
        })

    }

    // createMongoConnection() {

    //     // mongoose.connect(`mongodb+srv://masaiUser:MRNd405MkhMzT48T@cluster1.j5h2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    //     `mongodb://127.0.0.1:27017/test-app`,
    //     {useNewUrlParser: true}
    //     mongoose.connection.once('open', () => {
    //         console.log("MongoDB is connected");
    //     })
    //     mongoose.connection.on('error', () => {
    //         console.log("Error occured in mongoDB connection");
    //     })
    // }
}

module.exports = Mongo;



// const mongoose = require('mongoose')

// mongoose.connect(`mongodb://localhost/linkedin`, () => {
//     console.log("mongodb is running")
// })

// // mongoose.connect(`mongodb+srv://sarvar8950:Sarvar@12345@cluster0.e3h80.mongodb.net/linkedIn?retryWrites=true&w=majority`, () => {
// //     console.log("mongodb is running")
// // })

// module.exports = mongoose