const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
	email: String,
	name: String,
	password: String
})

module.exports = mongoose.model("User", userShema);