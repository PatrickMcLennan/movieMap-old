const mongoose = require('schema');
const Schema = mongoose.Schema;
const Model = mongoose.Model;

const Movie = require('./Movie.js');

const UserSchema = new Schema({
	name: {
		type: String,
		required: 'Each user must have a name'
	},
	email: {
		type: String,
		required: 'Each user must have an email'
	},
	savedMovies: [Movie]
});

module.exports = Model('User', UserSchema);
