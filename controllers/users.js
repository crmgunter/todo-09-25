const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err);
    });
    
});
router.post("/", (req, res) => {
  const newUser = new User({
      name: req.body.name,
      password: req.body.password
  });
  newUser
    .save()
    .then(user => {
      res.redirect('/api/users');
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id).then((user) => {
        user.ideas = user.ideas.reverse()
        res.json(user)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router;
