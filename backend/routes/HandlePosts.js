const express = require("express");
const router = express.Router();
const User = require("../user");
const jwt = require('jsonwebtoken');
const Post = require("../post");


router.get('/all', async (req, res) => {

    try {
        const posts = await Post.find()

        let result = posts.map(post => {
            return {
                id: post.id,
                Author: post.Author,
                Description: post.Description,
                Title: post.Title,
            };
        });

        res.status(200).json(result)
        
    } catch (err) {
        res.status(500).json({ Message: err.message })
    }
})

router.get('/:id', getPost, async (req, res) => {
    try {
        res.status(200).json(req.post)
    } catch (err) {
        res.status(500).json({ Message: err.message })
    }
})


router.post('/', authenticateToken, async (req, res) => {
    const post = new Post({
        Title: req.body.Title,
        Content: req.body.Content,
        Description: req.body.Description,
        Author: req.user.name
    })
    try {
        const newPost = await post.save();
        res.status(201).json(newPost)
    } catch (err) {
        res.status(400).json({ Message: err.message })
    }
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(authHeader);
    if (token === null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user.user
        next()
    })
}

async function getPost(req, res, next) {
    const id = req.params.id.split("=")[1]
    let post;
    try {
        post = await Post.findById(id)
        if (post == null) {
            return res.status(404).json({ Message: "Cannot find post" })
        }
    } catch (err) {
        return res.status(500).json({ Message: err.message })
    }
    console.log(post.Title)
    req.post = post;
    next();
}


module.exports = router