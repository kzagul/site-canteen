const { Router } = require('express')

const router = Router()

router.get('/form', function (_req, res) {
  if (Math.random() > 0.5) {
    res.json('Успешно')
  } else {
    res.json(new Error('error message'))
  }
})

module.exports = router
