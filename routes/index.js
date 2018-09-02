var express = require('express')
var router = express.Router()

var list = [
	{Bouteille: 'Passion Blue', Annee: 2017, Pays: 'France', Prix:7.35 + ' €'},
	{Bouteille: 'Château Cheval Blanc', Annee: 2008, Pays: 'France', Prix: 450 + ' €'}
]

router.get('/list', (req, res) => {
  res.json(list)
})

router.post('/list', (req, res) => {
  list.push({
    Bouteille: req.body.Bouteille,
    Annee: req.body.Annee,
    Pays: req.body.Pays,
    Prix: req.body.Prix
  })
  res.send('OK')
})

module.exports = router