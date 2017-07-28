const express = require('express')
const settings = require('./settings/settings.json')

const app = express()

app.listen(settings.port)
