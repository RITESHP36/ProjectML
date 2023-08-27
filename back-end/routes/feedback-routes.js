const express = require("express");

const {submitfeedback} = require('../controllers/feedback-controller');

const router = express.Router();

router.post('/submit-feedback', submitfeedback);

module.exports = router;
