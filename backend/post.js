const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
	Author: String,
	Title: String,
	Content: String,
	Description: String,
})

module.exports = mongoose.model("Post", postSchema);