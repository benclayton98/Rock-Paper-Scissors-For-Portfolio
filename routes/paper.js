const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const game = req.app.locals.game
  game.paper()
  game.cpuTurn()
  req.app.locals.choice = game.choice
  req.app.locals.cpuChoice = game.cpuChoice
  res.render('paper.ejs', {
  })
})

module.exports = router
