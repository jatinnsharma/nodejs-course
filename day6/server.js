"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction_1 = require("./transaction");
var accounts_1 = require("./accounts");
// create rest services
var app = express();
app.use('/module1', transaction_1.default);
app.use('/module2', accounts_1.default);
app.listen(8080, function () {
    console.log('Server start');
});
// http://localhost:8080/module1  -> request go to translation and run default req
// http://localhost:8080/module1/jatin
// http://localhost:8080/module2    (GET)
// http://localhost:8080/module2    (POST)
