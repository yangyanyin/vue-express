const axios = require("axios")

module.exports.homeData = function (req, res, next) {
	axios.get('https://cms.aicassets.com/v1/index').then(data => {
		res.render('home/index', {content: data.data});
	})
}
