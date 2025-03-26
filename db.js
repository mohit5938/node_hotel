const mongoose = require('mongoose')
require('dotenv').config();
const mongoURL = process.env.DB_URL;

// const connectDb = async ()=>{

//     try {
        
//         const connectionRecord = await mongoose.connect(`${mongoURL}`); 

//         console.log("Connection success!");

//     } catch (error) {
//         console.log("connection  failed" ,error);
//     }
// }
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }); 
const db = mongoose.connection;

//event listneer in mongoose 
db.on('connected',()=>{
    console.log("connection established");
})

db.on('disconnected',()=>{
    console.log("connection is  de-established");
})

db.on('error',(e)=>{
    console.log("mongoose error",e);
})

module.exports= db;