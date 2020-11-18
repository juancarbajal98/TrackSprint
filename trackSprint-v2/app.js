// setting up server with express
// express config
const express = require('express');
const app = express();
const port = 3002;
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

// make use of all necessary code in public folder
app.use(express.static("public"));

app.get('/',(req,res) =>{
    res.render('index.html')
})
app.get('/newSprint', (req,res) => {
    res.render('newSprint.html')
})
app.get('/manageBacklog', (req,res) => {
    res.render('manageBacklog.html')
})
app.get('/viewSprints', (req,res) => {
    res.render('viewSprints.html')
})
app.get('/trello', (req,res) => {
    res.render('trello.html')
})

// starts up express web server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

