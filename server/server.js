const express =  require('express');
const app = express();
const mysql = require('mysql');
const cors =require('cors');

app.use(cors());

app.use(express.json())



app.get('/', (req, res) =>{

    res.send("Hello world");

})

app.get('/update',(req, res) =>{
    res.send(req.body.arr);
    console.log("hello")
})






app.listen(3001, ()=>{console.log("listening on port 3001")}); 