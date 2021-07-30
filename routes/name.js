const express = require('express')
const router = express.Router()

const RPS = require('./../src/rps.js')

router.post('/', (req, res) => {
    req.app.locals.name = req.body.userName
    const game = new RPS(req.app.locals.name);
    req.app.locals.game = game
    res.render('rps.ejs', {
        name: req.app.locals.name
    })
  })

module.exports = router;