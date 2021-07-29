const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))   

app.get('/', (req, res) => {
  res.render('homepage.ejs')
})

app.post('/name', (req, res) => {
    res.render('rps.ejs', {
        name: req.body.userName
    })
  })

app.post('/game', (req, res) => {
  res.render('game.ejs', {
      
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})