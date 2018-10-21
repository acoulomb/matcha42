var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');
});

app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});

app.get('/1/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hé ho, c\'est privé ici !');
});

// app.get('/etage/:etagenum/chambre', function(req, res) {
//     if (parseInt(req.params.etagenum) !== NaN){
//         console.log("la", parseInt(req.params.etagenum));
//         // res.setHeader('Content-Type', 'text/plain');
//         // res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
//     } else {
//         console.log("ici", parseInt(req.params.etagenum));
//         app.use(function(req, res, next){
//             res.setHeader('Content-Type', 'text/plain');
//             res.status(404).send('Page introuvable !');
//         });
//     }
// });

app.get('/etage/:etagenum/chambre', function(req, res) {
    res.render('chambre.ejs', {etage: req.params.etagenum});
});

app.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);