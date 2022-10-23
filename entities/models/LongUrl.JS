const Url = require('./Url');
const urlTable = require('../../models').url;
const crypto = require('crypto');
const { log } = require('console');

class LongUrl extends Url {
	constructor(url, shortId) {
		super(url);
		this.url = url;
		this.shortId = shortId;
	}
	async convertUrl() {
		const id = crypto.randomBytes(3).toString('hex');

		try {
			const response = await urlTable.findOrCreate({
				where: { longUrl: this.url, shortUrl: this.shortId ? this.shortId : id },
				defaults: {
					longUrl: this.url,
					shortUrl: this.shortId ? this.shortId : id,
				},
			});

			return {
				Status: 'Basarili',
				Url: response[0].dataValues.longUrl,
				ShortenUrl: `http://localhost:${process.env.APP_PORT}` + '/' + response[0].dataValues.shortUrl,
			};
		} catch (error) {
			return error;
		}
	}
}

module.exports = LongUrl;
