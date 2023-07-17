const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:{
        type:string,
        default:null,
    },
    lastname:{
        type:string,
        default:null
    },
    email:{
        type:String,
        unique:true
    },password:{
        type:String
    },token:{
        type:String
    }
})