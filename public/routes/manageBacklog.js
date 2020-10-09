"use strict";
const express = require('express');
let router = express.Router();
const HTML_PATH = __dirname.substr(0, __dirname.length-6) + "html";

router.get('/',(req,res) =>{
    res.sendFile(HTML_PATH + "/manageBacklog.html", (req,res) =>{
        console.log('sent manage backlog');
    })
})

module.exports = router;