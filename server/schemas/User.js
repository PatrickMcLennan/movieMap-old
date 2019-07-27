const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

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
	savedMovies: [Movie]
});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

UserSchema.virtual('password').set(function(value) {
	this.password = bcrypt.hashSync(value, 12);
});

module.exports = Model('User', UserSchema);
