const express = require("express");

const app = express();

//static file handling
app.use(express.static("public"));

const port = 3000;
app.listen(port, function()
{
	console.log("listening on port "+port+".");
});