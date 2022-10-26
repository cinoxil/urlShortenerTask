var isUrlValid = require('url-validation');

const verifyUrl = (req, res, next) => {
	const { url } = req.body;

	console.log(url);
	if (!isUrlValid(url)) {
		return res.status(400).send('Url must be valid');
	} else {
		next();
	}
};

module.exports = { verifyUrl };
