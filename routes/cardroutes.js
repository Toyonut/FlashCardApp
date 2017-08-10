const express = require('express')
const router = express.Router()
const { data } = require('../data/cards.json')
const { cards } = data

router.get('/:id', (req, res) => {
  const name = req.cookies.username
  const { id } = req.params
  const { side } = req.query
  const text = cards[id][side] // this combines the id number for the Q with the side (question or answer). depending on side will set value of text.
  const { hint } = cards[id]
  const templateData = { text }

  if (name) {
    if (side === 'question') {
      templateData.hint = hint
    }
    res.render('card', templateData)
  } else {
    res.redirect('/hello')
  }
})

module.exports = router
