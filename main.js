const express = require("express")
const mysql = require("mysql")
const path = require("path")
const http =require('http')

const app = express()

app.use(express.static(path.join(__dirname)))

const db = mysql.createConnection({
    host :"localhost",
    database:"db_bromtour",
    user:"root",
    password:"",
})

db.connect((err)=>{
    if(err)throw err
    console.log("databse connected...")
})

app.get('/bromotour', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/', (req, res) => {
    const sql = "select * from admin "

    db.query(sql, (err,reslut)=>{ 
        res.json({
            message: "success",
            data: reslut,
        })
    })
})

app.listen(8080,()=>{
    console.log("Sever Ready")
})
    
console.log(http)