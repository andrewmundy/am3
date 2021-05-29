require("dotenv").config();

const withFonts = require("next-fonts");

module.exports = withFonts();

module.exports = {
	env: {
		SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
	},
};
