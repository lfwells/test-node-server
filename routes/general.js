const router = require('express').Router();

//basic public routes
router.get('/', (req, res) =>
{
	res.render('index'); //looks this up in views
});
router.get('/two', (req, res) =>
{
	res.render('two'); //looks this up in views
});

//export this so that we can require it in server.js
module.exports = router;