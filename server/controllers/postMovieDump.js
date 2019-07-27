const Movie = require('../schemas/Movie');

const postMovieDump = (req, res) => {
	const { movies } = req;
	return res.json(movies);
};

module.exports = postMovieDump;
