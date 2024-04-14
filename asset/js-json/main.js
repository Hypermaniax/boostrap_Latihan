const express = require("express")
const mysql = require("mysql")

const app = express()

const db =mysql.createConnection({
    host :"localhost",
    database:"db_bromtour",
    user:"root",
    password:"",
})

db.connect((err)=>{
    if(err)throw err
    console.log("databse connected...")

    const sql = "select * from admin "
    db.query(sql,(err,reslut)=>{
        console.log("hasil data base ->",reslut)       
        app.get("/",(req,res)=>{
            res.send(result)
        })
    })
})

app.listen(8000,()=>{
    console.log("Sever Ready");
})

const libraryexpress = require('express')

const port = 8000
const server = libraryexpress()

server.use(libraryexpress.json())