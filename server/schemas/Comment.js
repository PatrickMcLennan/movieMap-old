const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const CommentSchema = new Schema({
	user: {
		type: String,
		required: 'Each comment must have a user name'
	},
	date: {
		type: Date,
		required: 'Each comment must have a time stamp'
	},
	body: {
		type: String,
		required: 'You cannot have an empty Comment.'
	}
});

module.exports = Model('Comment', CommentSchema);
