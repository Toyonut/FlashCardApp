const settings = require('./settings/settings.json')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const name = req.cookies.username
  if (name) {
    res.render('index', {name})
  } else {
    res.redirect('/hello')
  }
})

app.get('/card', (req, res) => {
  res.render('card', {
    prompt: 'who is buried in Grants tomb?',
    hint: 'Think about whose tomb it is.'
  })
})

app.get('/hello', (req, res) => {
  const name = req.cookies.username
  if (name) {
    res.redirect('/')
  } else {
    res.render('hello')
  }
})

app.post('/hello', (req, res) => {
  if (req.body) {
    res.cookie('username', req.body.username)
    res.redirect('/')
  }
})

app.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/hello')
})

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
