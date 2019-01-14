const express = require("express");
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');

//Mongo DB
mongoose.connect('mongodb://144.6.226.73:27017/myCoolDB', 
	{ useNewUrlParser: true });

const app = express();

//static file handling
app.use(express.static("public"))

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