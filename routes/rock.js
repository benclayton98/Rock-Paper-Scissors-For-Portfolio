const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const game = req.app.locals.game
  game.rock()
  game.cpuTurn()
  req.app.locals.choice = game.choice
  req.app.locals.cpuChoice = game.cpuChoice
  res.render('rock.ejs', {
  })
})

module.exports = router
