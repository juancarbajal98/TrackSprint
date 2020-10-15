"use strict";
const express = require('express');
let router = express.Router();
// capture path of newSprint html
const HTML_PATH = __dirname.substr(0, __dirname.length-6) + "html";


router.get('/',(req,res) => {
    res.sendFile(HTML_PATH + "/newSprint.html",(req,res) => {
        console.log('sent new sprint');
    });
});

// export our router object
// i.e. when we require this route on other files we are 
//      getting back this router object
module.exports = router;