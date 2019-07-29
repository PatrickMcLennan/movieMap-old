const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const uniqueValidator = require('mongoose-unique-validator');
// const bcrypt = require('bcrypt');

const Movie = require('./Movie.js');

const UserSchema = new Schema({
	name: {
		type: String,
		required: 'Each user must have a name'
	},
	email: {
		type: String,
		required: 'Each user must have an email',
		unique: true
	},
	password: {
		type: String,
		required: 'Each user must have a password'
	},
	// savedMovies: [Movie],
	colorScheme: String,
	notifications: [
		{
			notification: {
				type: String,
				required: 'Each notification must have a type'
			},
			body: {
				type: String,
				required: 'Each notification must have a body'
			},
			name: {
				type: String
			}
		}
	]
});

UserSchema.plugin(uniqueValidator);

module.exports = Model('User', UserSchema);
