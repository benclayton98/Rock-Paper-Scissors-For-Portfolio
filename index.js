const express = require('express')
const RPS = require('./src/rps.js')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))   

app.get('/', (req, res) => {
  res.render('homepage.ejs')
})

app.post('/name', (req, res) => {
    req.app.locals.name = req.body.userName
    const game = new RPS(req.app.locals.name);
    req.app.locals.game = game
    res.render('rps.ejs', {
        name: req.app.locals.name
    })
  })

app.post('/rock', (req, res) => {
    let game = req.app.locals.game
    game.rock()
    game.cpuTurn()
    req.app.locals.choice = game.choice
    req.app.locals.cpuChoice = game.cpuChoice
  res.render('rock.ejs', {
  })
})


app.post('/paper', (req, res) => {
    let game = req.app.locals.game
    game.paper()
    game.cpuTurn()
    req.app.locals.choice = game.choice
    req.app.locals.cpuChoice = game.cpuChoice
  res.render('paper.ejs', {
  })
})

app.post('/scissors', (req, res) => {
  let game = req.app.locals.game
    game.scissors()
    game.cpuTurn()
    req.app.locals.choice = game.choice
    req.app.locals.cpuChoice = game.cpuChoice
  res.render('scissors.ejs', {
  })
})

app.post('/cpuTurn', (req, res) => {
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})