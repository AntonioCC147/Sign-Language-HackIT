require('dotenv').config()

const express = require("express");
const router = express.Router();
const Review = require("../review");
const authenticateToken = require('../middlewares/auth');

router.get('/', async (req, res) => {

	try {
		const review = await Review.find({ Parent: req.body.id })

		let result = review.map(review => {
			return {
				From: review.From,
				Message: review.Message,
				Grade: review.Grade
			};
		});

		res.status(200).json(result)

	} catch (err) {
		res.status(500).json({ Message: err.message })
	}
})

router.post('/', authenticateToken, async (req, res) => {
	const review = new Review({
		Parent: req.body.id,
		From: req.user.name,
		Message: req.body.message,
		Grade: req.body.grade
	})
	try {
		const newReview = await review.save();
		res.status(201).json(newReview)
	} catch (err) {
		res.status(400).json({ Message: err.message })
	}
})

module.exports = router;
