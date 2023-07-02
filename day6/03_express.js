"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express module
var express = require("express");
var app = express();
// app object used to develop the rest services.
// Ex. GET,POST,PUT,DELETE...
// GET Request
app.get('/', function (req, res) {
    res.status(200).json({ 'message': 'welcome to typeScript with nodejs' });
});
// assign the port no
app.listen(8080, function () {
    console.log('server working');
});
