const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/testdb")
const db = mongoose.connection

const UserRouter = require('./routes/HandleUsers')

const PostRouter = require('./routes/HandlePosts')
const ReviewRouter = require('./routes/HandleReviews')
const ScraperRouter = require('./routes/Scraper')
app.use('/posts', PostRouter)
app.use('/users', UserRouter)
app.use('/reviews', ReviewRouter)
app.use('/scrape', ScraperRouter)

app.listen(5000, () => {
	console.log("Server started on port 5000");
})
