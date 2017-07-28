const settings = require('./settings/settings.json')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h3>Made with love by Paul</h3>')
})

app.listen(settings.port, () => {
  console.log(`Express is running on port ${settings.port}`)
})
