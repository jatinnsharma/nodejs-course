"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//http://localhost:8080/login?uname=admin&upwd=admin
// req.query.uname 
// req.query.upwd
var express = require("express");
var app = express();
// authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === 'ashokIT') {
        next();
    }
    else {
        res.status(500).json({ auth: 'fail' });
    }
};
// authentication
app.get('/login', function (req, res) {
    if (req.query.uname === "Jatin" && req.query.upwd === 'Jatin') {
        res.status(200).json({ login: 'success' });
    }
    else {
        res.status(400).json({ login: 'failed' });
    }
});
app.get('/', function (req, res) {
    res.sendFile('D:/nodejs-course/day8/getparameters/index.html');
});
app.listen(8081, function () {
    console.log("Sever start");
});
