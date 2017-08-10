const express = require('express')
const router = express.Router()
const { data } = require('../data/cards.json')
const { cards } = data

router.get('/:id', (req, res) => {
  const name = req.cookies.username
  const { id } = req.params
  const { side } = req.query
  const text = cards[id][side] // this combines the id param query (question or answer) to set value of text to Q or A.
  const { hint } = cards[id]
  const templateData = { id, text }

  if (name) {
    if (side === 'question') {
      templateData.hint = hint
      templateData.sideToShow = 'answer'
      templateData.sideToShowDisplay = 'Answer'
    } else if (side === 'answer') {
      templateData.sideToShow = 'question'
      templateData.sideToShowDisplay = 'Question'
    }
    res.render('card', templateData)
  } else {
    res.redirect('/hello')
  }
})

module.exports = router
