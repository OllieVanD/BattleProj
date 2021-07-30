const loadPage = (req, res) => {
	console.log('in the get method!');
	res.render('index.ejs');
}

module.exports = {loadPage}