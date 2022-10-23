const urlFactory = require('../entities/url-factory');
var isUrlValid = require('url-validation');

module.exports = {
	longUrlConvert: async (req, res) => {
		const { url, shortId } = req.body;
		//! Url example = https://www.npmjs.com/package/url-valid

		if (!isUrlValid(url)) return res.status(400).send('Url must be valid');

		const Url = new urlFactory(url, 'long', shortId);
		const response = await Url.islemYap();

		if (response.errors) {
			return res.status(500).send(response.errors[0].message);
		} else {
			return res.status(200).send(response);
		}
	},
	shortUrlConvert: async (req, res) => {
		const { hex } = req.params;

		const Url = new urlFactory(hex, 'short');
		const response = await Url.islemYap();

		return res.status(301).redirect(response.longUrl);
	},
};
