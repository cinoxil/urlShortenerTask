const Url = require('./Url');
const urlTable = require('../../models').url;
class ShortUrl extends Url {
	constructor(url) {
		super(url);
		this.url = url;
	}
	async convertUrl() {
		try {
			const result = await urlTable.findOne({
				where: {
					shortUrl: this.url,
				},
			});

			return result;
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = ShortUrl;
