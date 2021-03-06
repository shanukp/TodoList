var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

var port = 4000;

app.listen(port, function () {
  console.log('App listening on port 3000!');
});
