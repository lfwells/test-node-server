const express = require("express");
const mustacheExpress = require('mustache-express');

const app = express();

//static file handling
app.use(express.static("public"))

//mustache express, and making it not cache
const mustache = mustacheExpress();
mustache.cache = null; //not a good idea for production
app.engine('mustache', mustache);
app.set('view engine', 'mustache');

const port = 3000;
app.listen(port, function()
{
	console.log("listening on port "+port+".");
});