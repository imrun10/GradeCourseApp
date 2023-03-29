
const {createPool} = require("mysql");
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'GradingSystem'
})


pool.query(`Select * from GradingSystem.Section`,(err,res)=>{
    return console.log(res)
})
