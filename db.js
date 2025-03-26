const mongoose = require('mongoose')

const mongoURL = 'mongodb+srv://ms98357mohit:mohit123@cluster0.jd1i4.mongodb.net/?retryWrites=true&w=majority';

// const connectDb = async ()=>{

//     try {
        
//         const connectionRecord = await mongoose.connect(`${mongoURL}`); 

//         console.log("Connection success!");

//     } catch (error) {
//         console.log("connection  failed" ,error);
//     }
// }
mongoose.connect(mongoURL);
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