"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "Get accounts soon...!" });
});
accounts.post("/", function (req, res) {
    res.status(200).json({ message: "Post account soon...!" });
});
exports.default = accounts;
