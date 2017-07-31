const settings = require('./settings/settings.json')
const express = require('express')
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const names = [
  {first: 'Bill',
    last: 'Gates'},
  {first: 'Ted',
    last: 'Bundy'},
  {first: 'Bill',
    last: 'Nye'},
  {first: 'William',
    last: 'Shatner'},
  {first: 'Spider',
    last: 'man'}
]

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/card', (req, res) => {
  res.render('card', {
    prompt: 'who is buried in Grants tomb?',
    hint: 'Think about whose tomb it is.'
  })
})

app.get('/sandbox', (req, res) => {
  res.render('sandbox', {names})
})

app.get('/hello', (req, res) => {
  res.render('hello', {'name': 'Student'})
})

app.post('/hello', urlencodedParser, (req, res) => {
  if (req.body) {
    console.dir(req.body.username)
    res.status(200)
    res.render('hello', {'name': req.body.username})
  }
})

app.listen(settings.port, () => {
  console.log(`Express is running on port ${settings.port}`)
})
