const express = require("express");

const { submitfeedback, getFeedback } = require('../controllers/feedback-controller');

const router = express.Router();

router.post('/submit-feedback', submitfeedback);
router.get('/get-feedback', getFeedback); // Add a new GET route

module.exports = router;
