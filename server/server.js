const express =  require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());



app.get('/', (req, res) =>{

    res.send("Hello world");

})


var d;

app.post('/api/save/',(req, res) =>{

    d = req.body.arr

});




app.get('/api/show/',(req,res)=>{
    res.send(d);
    
})


app.listen(3001, ()=>{console.log("listening on port 3001")}); 

