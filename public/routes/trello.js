"use strict";
const express = require('express');
let router = express.Router();
const HTML_PATH = __dirname.substr(0, __dirname.length-6) + "html";


router.get('/',(req,res) => {
    console.log('entered trello root route');
    res.sendFile(HTML_PATH + "/trello.html",(req,res) => {
        console.log('sent trello');
    });
});

// export our router object
// i.e. when we require this route on other files we are 
//      getting back this router object
module.exports = router;