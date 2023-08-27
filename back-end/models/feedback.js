const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
	regno: {
		type: String,
		required: true,
	},
	sem: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	assigned_prof: {
		type: String,
		required: true,
	},
	rating: {
		type: String,
		required: true,
	},
	recommended_prof: {
		type: String,
		required: true,
	},
});

console.log("Feedback model created!");

module.exports = mongoose.model("Feedback", feedbackSchema);
