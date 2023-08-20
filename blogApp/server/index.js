const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const path = require('path')
const UserModel = require('./models/UserModel')

const app = express()
const PORT = 8080
app.use(express.json())
app.use(cors({
    origin:['http://localhost:5173'],
    methods:['GET','POST',"PUT","DELETE"],
    credentials:true,
}))
app.use(cookieParser())

mongoose.connect('mongodb+srv://jatinnsharma:Jatin2231pvt@cluster0.26berr0.mongodb.net/?retryWrites=true&w=majority')

app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .then(err=>res.json(err))
})

app.listen(PORT,()=>{
    console.log(`server is running on the ${PORT}`)
})