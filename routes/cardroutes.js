const express = require('express')
const router = express.Router()
const { data } = require('../data/cards.json')
const { cards } = data

router.get('/:id', (req, res) => {
  const name = req.cookies.username
  const cardNum = req.params.id
  if (name) {
    res.render('card', {
      prompt: cards[cardNum].question,
      hint: cards[cardNum].hint
    })
  } else {
    res.redirect('/hello')
  }
})

module.exports = router
