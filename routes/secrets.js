const express = require('express')
const router = express.Router()
const queries = require('../queries')

router.get('/', (req, res) => {
  queries.getSecret(req.body)
    .then(function(secret) {
      res.json(secret)
    })
})

router.post('/', (req, res) => {
  queries.createSecret(req.body)
    .then(function(secret) {
      res.json(secret)
    })
})


module.exports = router;
