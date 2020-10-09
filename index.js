// setting up server with express
// express config
const express = require('express');
const app = express();
const port = 3001;
// routers
const newSprint = require('./public/routes/newSprint');
const sprintScreen = require('./public/routes/sprintScreen');
const sprintReport = require('./public/routes/sprintReport');
const manageBacklog = require('./public/routes/manageBacklog');
const trello = require('./public/routes/trello');


// make use of all necessary code in public folder
app.use(express.static("public"));

// use our Routes here at root js file
app.use("/newsprint", newSprint);
app.use("/sprintscreen", sprintScreen);
app.use("/viewreports", sprintReport);
app.use("/managebacklog", manageBacklog);
app.use("/trello", trello);

// starts up express web server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));