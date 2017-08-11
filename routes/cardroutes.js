const express = require('express')
const router = express.Router()
const { data } = require('../data/cards.json')
const { cards } = data

router.get('/', (req, res) => {
  let questionNum = cards.length
  let randomCard = Math.floor(Math.random() * questionNum)
  res.redirect(`/cards/${randomCard}?side=question`)
})

router.get('/:id', (req, res) => {
  const name = req.cookies.username
  const { id } = req.params
  let { side } = req.query
  const text = cards[id][side] // this combines the id param query (question or answer) to set value of text to Q or A.
  const { hint } = cards[id]
  const templateData = { id, text }

  const allowedValues = ['question', 'answer']
  if (allowedValues.includes(side) === false) {
    res.redirect(`/cards/${id}?side=question`)
    return // need to return here else express tries to send the render too leading to an error.
    // Error: Can't set headers after they are sent. redir sends 302, render tries to send 200.
  }

  if (name) {
    templateData.name = name
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
