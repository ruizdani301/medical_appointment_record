const router = require('express').Router();

router.get('/testGet', (req, res) => {
  return res.json({ message: 'OK' })
})

module.exports = router
