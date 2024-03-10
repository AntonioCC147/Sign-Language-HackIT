const express = require("express");
const router = express.Router();
const {scrape, searchFor} = require("../scraper/scraper");

router.post("/", async (req, res) => {
    const url = req.body.url;

    const pageData = await scrape(url);

    return res.send(pageData);
});

router.post("/search", async (req, res) => {
    const searchQuery = req.body.searchQuery;

    let searchResults = await searchFor(searchQuery);
    const blacklistWords = ["wikipedia", "captcha", "medical", "pdf", "youtube", "facebook", 
        "twitter", "instagram", "pinterest", "linkedin", "reddit", "tumblr", "flickr", 
        "snapchat", "quora", "vimeo", "soundcloud", "spotify", "bandcamp", "last.fm", 
        "pandora", "deezer", "amazon", "ebay", "etsy", "craigslist", "walmart", "bestbuy", 
        "target", "alibaba", "aliexpress", "dhgate"]
    searchResults = searchResults.filter(({title}) => 
        !blacklistWords.some(word => title.toLowerCase().includes(word)));

    return res.send(searchResults);
});

module.exports = router;