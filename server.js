const express = require('express')
const app = express();
const port = 3000 ;


const db = require('./db');

const bodyParse = require('body-parser');
app.use(bodyParse.json());

app.get('/',(req,res)=>{
    res.send("well come to my hotel");
})

const personroutes = require('./routes/personRoutes');
const menuroutes = require('./routes/menuRoutes');
app.use('/person',personroutes);
app.use('/menu',menuroutes);

app.listen(port,()=>{
    console.log('app is ready ');
})
