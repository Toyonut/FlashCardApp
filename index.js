const settings = require('./settings/settings.json')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mainRoutes = require('./routes/mainroutes.js')
const cardRoutes = require('./routes/cardroutes.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(mainRoutes)
app.use('/cards', cardRoutes)
app.use('/static', express.static('public'))

app.set('view engine', 'pug')

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  if (err) {
    res.status(err.status)
    res.render('error', {err})
  }
})

app.listen(settings.port, () => {
  console.log(`Express is running on port ${settings.port}`)
})
