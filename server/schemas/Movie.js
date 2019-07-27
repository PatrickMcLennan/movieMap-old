const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const User = require('./User');
const Comment = require('./Comment');

const MovieSchema = new Schema({
	titie: {
		type: String,
		required: 'Each movie must have a title'
	},
	href: {
		type: String,
		required: 'Each movie must have an href'
	},
	ratings: [
		{
			user: {
				type: String,
				required: 'Each rating must have a user attached to it.'
			},
			rating: {
				type: Number,
				min: 1,
				max: 5,
				required: 'Each Rating must have a number rating'
			}
		}
	],
	quality: [
		{
			user: {
				type: String,
				required: 'Each Quality rating must have a user attached to it.'
			},
			quality: {
				type: Number,
				min: 1,
				max: 5,
				required: 'Each Quality rating must have a number attached to it.'
			}
		}
	],
	reports: [
		{
			user: {
				type: String,
				required: 'Each Report must have a user name attached to it.'
			},
			comment: String
		}
	],
	origin: {
		type: String,
		required: 'Each movie must have a specified origin'
	},
	comments: [
		{
			name: { type: String, required: 'Each comment must have a user name' },
			body: { type: String, required: 'Each comment must have a body' }
		}
	]
});

module.exports = Model('Movie', MovieSchema);
