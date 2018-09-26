const express = require("express");
const User = require('../models/user')
const Idea = require("../models/idea");
const router = express.Router({mergeParams: true});

router.get("/", (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const ideas = user.ideas
        res.json(ideas)
    }).catch(err => {
        console.log(err)
    })
  });

router.post('/', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const newIdea = new Idea({
            title: req.body.title,
            description: req.body.description
        })
        user.ideas.push(newIdea)
        user.save().then((user) => {
            res.json(newIdea)
        })
    })
})

module.exports = router