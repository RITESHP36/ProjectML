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

const getFeedback = async (req, res, next) => {
	try {
		const feedback = await Feedback.find(); // Assuming you want to retrieve all feedback entries
		return res.status(200).json(feedback);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Error fetching feedback" });
	}
};

exports.submitfeedback = submitfeedback;
exports.getFeedback = getFeedback;