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
    let result = game.battle()
    console.log(result)
  res.render('rock.ejs', {
    result: result
  })
})

app.post('/paper', (req, res) => {
  res.render('paper.ejs', {
  })
})

app.post('/scissors', (req, res) => {
  res.render('scissors.ejs', {
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})