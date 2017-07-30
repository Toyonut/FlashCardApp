const settings = require('./settings/settings.json')
const express = require('express')

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
]

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
  res.render('index', {colors})
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

app.listen(settings.port, () => {
  console.log(`Express is running on port ${settings.port}`)
})
