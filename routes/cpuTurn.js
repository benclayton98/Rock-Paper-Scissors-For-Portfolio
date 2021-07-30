const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  let game = req.app.locals.game
  let choice = req.app.locals.choice
  let cpuChoice = req.app.locals.cpuChoice
  let result = game.battle()

  res.render('cpuTurn.ejs', {
    choice: choice,
    cpuChoice: cpuChoice,
    result: result
  })
})

module.exports = router;