const axios = require('axios');

const mailshooter = async ({ apikey, email, subject, html }) =>
	(await axios.post('https://mailshooter.dev:8443/send', { apikey, email, subject, html })).data;

module.exports = mailshooter;
