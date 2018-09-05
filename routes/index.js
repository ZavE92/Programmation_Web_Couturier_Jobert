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
  	if (req.body.Retirer !== "" && Number(req.body.Retirer) > 0){
  		list.splice(req.body.Retirer - 1, 1)
  		res.send('OK')
  	}

  	if (req.body.Modifier !== "" && Number(req.body.Modifier) > 0){
  		if (req.body.Bouteille !== ''){
			list[req.body.Modifier - 1].Bouteille = req.body.Bouteille;
		}
		if (req.body.Annee !== ""){
			list[req.body.Modifier - 1].Annee = req.body.Annee;
		}
		if (req.body.Pays !== ''){
			list[req.body.Modifier - 1].Pays = req.body.Pays;
		}
		if (req.body.Prix !== ""){
			list[req.body.Modifier - 1].Prix = req.body.Prix + '€';
		}
		if (req.body.Quantite !== ""){
			list[req.body.Modifier - 1].Quantite = 'Quantité: ' + req.body.Quantite;
		}
		res.send('OK')
  	}

  	if(req.body.Retirer === undefined && req.body.Modifier === undefined){
  		list.push({
			Bouteille: req.body.Bouteille,
			Annee: req.body.Annee,
			Pays: req.body.Pays,
			Prix: req.body.Prix,
			Quantite: req.body.Quantite
			})
		res.send('OK')
	}
})
module.exports = router
