const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
	Parent: mongoose.SchemaTypes.ObjectId,
	From: String,
	Message: String,
	Grade: Number
})

module.exports = mongoose.model("Review", reviewSchema);
