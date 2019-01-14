const express = require("express");
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Mongo DB
//mongoose.connect('mongodb://lindsay:W9P,.)C}.$)ArMj5@144.6.226.73:27017/myCoolDB', 	{ useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/myCoolDB', 	{ useNewUrlParser: true });
//W9P,.)C}.$)ArMj5

const app = express();

//static file handling
app.use(express.static("public"))

//handle post bodies
app.use(bodyParser.urlencoded({extended: false}));

//mustache express, and making it not cache
const mustache = mustacheExpress();
mustache.cache = null; //not a good idea for production
app.engine('mustache', mustache);
app.set('view engine', 'mustache');

//routing
app.use(require('./routes/general'));

const port = 3000;
app.listen(port, function()
{
	console.log("listening on port "+port+".");
});