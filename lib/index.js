/* eslint-disable class-methods-use-this */
const rp = require('request-promise');
const cheerio = require('cheerio');

class Mediafire {
  async download(url) {
    try {
      const options = {
        uri: url,
        transform(body) {
          return cheerio.load(body);
        },
      };
      const $ = await rp(options);
      return $('.download_link a.input').attr('href');
    } catch (error) {
      throw TypeError('Error:', error);
    }
  }
}

module.exports = Mediafire;
