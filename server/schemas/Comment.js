const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.Model;

const CommentSchema = new Schema({
	user: {
		name: String,
		required: 'Each comment must have a user name'
	},
	date: {
		date: Date,
		required: 'Each comment must have a time stamp'
	},
	body: {
		type: String,
		required: 'You cannot have an empty Comment.'
	}
});

module.exports = Model('Comment', CommentSchema);
