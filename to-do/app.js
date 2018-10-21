var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();


/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}))


/* Gestion des routes en-dessous */

.get('/todo', function(req, res) {

});

.post('/todo/ajouter', function(req, res) {

});

.get('/todo/supprimer/:id', function(req, res) {

});

app.listen(8080);