
const express = require("express");
const app = express();
const mysql = require("mysql");
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'GradingSystem'
})

con.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Connected")
    }
})
app.get("/fetch",(req,res)=>{
    con.query(`Select * from GradingSystem.Section`,function(err,result,fields){
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.listen(3001, () => {
    console.log("listening on port 3001");
});
