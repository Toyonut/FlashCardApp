const settings = require('./settings/settings.json')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(settings.port)
