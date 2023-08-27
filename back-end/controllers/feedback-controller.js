const Feedback = require("../models/feedback");

//feedback controller
const submitfeedback = async (req, res, next) => {
	const { regno, sem, subject, assigned_prof, rating, recommended_prof } =
		req.body;

	// create new feedback object
	const feedback = new Feedback({
		regno,
		sem,
		subject,
		assigned_prof,
		rating,
		recommended_prof,
	});
	// save feedback to database
	try {
		await feedback.save();
		// return confirmation response with feedback details
		return res.status(201).json({ message: feedback });
	} catch (err) {
		console.log(err);
	}
};

exports.submitfeedback = submitfeedback;
