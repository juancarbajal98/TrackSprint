// setting up server with express
const express = require('express');
const app = express();
const port = 3001;

// serve HTML and CSS for home page
// app.get('/', (req, res) => {
//     res.sendFile('public/index.html', {root: __dirname});
// });
app.use(express.static("public"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));