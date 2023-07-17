
const express = require('express')
const app = express()
const PORT=8080
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

mongoose.connect('mongodb+srv://Jatin:Jatin2231pvt@cluster0.qtmbtsr.mongodb.net/bookStore?retryWrites=true&w=majority')

app.get('/',(req,res)=>{
    res.send('<h1>Hello Express!</h1>')
})

app.get("/getUSers",(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING PERFECTY:${PORT}`)
})