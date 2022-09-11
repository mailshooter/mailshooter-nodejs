const axios = require('axios');

const mailshooter = async ({ apikey, from, to, subject, html }) =>
	(await axios.post('https://api.mailshooter.dev/v1/sendmail', { apikey, from, to, subject, html })).data;

module.exports = mailshooter;
