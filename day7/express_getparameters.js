"use strict";
// Read Get parameters in express js 
// http://localhost:8080/login/uname/admin/upwd/admin
// import * as express from 'express'
// let app: any = express()
// app.get('/login/uname/:uname/upwd/:upwd',(req:any,res:any):any=>{
//     if(req.params.uname==='Jatin' && req.params.upwd==="Jatin"){
//         res.status(200).json({login:'success'});
//     }else{
//         res.status(400).json({login:'fail'});
//     }
// });
// app.listen(8080,()=>{
//     console.log('Server Start at PORT 8080');
// })
Object.defineProperty(exports, "__esModule", { value: true });
//http://localhost:8080/login?uname=admin&upwd=admin
// req.query.uname
// req.query.upwd
var express = require("express");
var app = express();
app.get('/login', function (req, res) {
    if (req.query.uname === "Jatin" && req.query.upwd === 'Jatin') {
        res.status(200).json({ login: 'success' });
    }
    else {
        res.status(400).json({ login: 'failed' });
    }
});
app.listen(8081, function () {
    console.log("Sever start");
});
// assignment https://localhost:8080/login/admin/admin
