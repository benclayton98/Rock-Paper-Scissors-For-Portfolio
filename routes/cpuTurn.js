const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const game = req.app.locals.game
  const choice = req.app.locals.choice
  const cpuChoice = req.app.locals.cpuChoice
  const result = game.battle()

  res.render('cpuTurn.ejs', {
    choice: choice,
    cpuChoice: cpuChoice,
    result: result
  })
})

module.exports = router
