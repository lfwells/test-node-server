const router = require('express').Router();
const Book = require('../models/book.js');

//basic public routes
router.get('/', (req, res) =>
{
	res.render('index'); //looks this up in views
});
router.get('/two', (req, res) =>
{
	Book.find({}, function (err, result) 
	{
		res.render('two', { books: result }); //looks this up in views
    });
});
router.post('/two', (req, res) =>
{
	const book = new Book({
		title:req.body.title, 
		author:req.body.author 
	});

	book.save((err) =>
	{
		if (err)
		{
			console.log(err); 
		}
		else
		{
			console.log("added book", book);
		}

		res.redirect('/two'); // note the use of redirect here, to avoid the post confirmation window
	});
});

//export this so that we can require it in server.js
module.exports = router;