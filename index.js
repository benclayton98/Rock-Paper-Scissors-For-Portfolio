const express = require('express')
const app = express()
const port = 3000
const nameRouter = require('./routes/name.js')
const rockRouter = require('./routes/rock.js')
const paperRouter = require('./routes/paper.js')
const scissorsRouter = require('./routes/scissors.js')
const cpuTurnRouter = require('./routes/cpuTurn.js')
const homepageRouter = require('./routes/homepage.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use('/', homepageRouter)
app.use('/name', nameRouter)
app.use('/rock', rockRouter)
app.use('/paper', paperRouter)
app.use('/scissors', scissorsRouter)
app.use('/cpuTurn', cpuTurnRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
