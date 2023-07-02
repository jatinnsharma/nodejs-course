"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create the sub module
var express = require("express");
// to make sub module
// express.Router()
var transactions = express.Router();
transactions.get('/', function (req, res) {
    res.status(200).json({ 'message': 'transactions soon.....!' });
});
transactions.get('/jatin', function (req, res) {
    res.status(200).json({ 'message': 'jatin your transaction soon...!' });
});
exports.default = transactions;
