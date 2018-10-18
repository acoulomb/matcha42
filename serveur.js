// var http = require('http');

// var server = http.createServer(function(req, res) {
// 	res.writeHead(200, {"Content-Type": "text/html"});
// 	res.write('<!DOCTYPE html>'+
// 	'<html>'+
// 	'    <head>'+
// 	'        <meta charset="utf-8" />'+
// 	'        <title>Ma page Node.js !</title>'+
// 	'    </head>'+ 
// 	'    <body>'+
// 	'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
// 	'    </body>'+
// 	'</html>');
// 	res.end();
// });
// server.listen(8080);

// var http = require('http');
// var url = require('url');
// var querystring = require('querystring');

// var server = http.createServer(function(req, res) {
//     var page = url.parse(req.url).pathname;
//     console.log(page);
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     if (page == '/') {
// 		res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
//     }
//     else if (page == '/sous-sol') {
// 		res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
//     }
//     else if (page == '/etage/1/chambre') {
// 		res.write('Hé ho, c\'est privé ici !');
// 	}
// 	else{
// 		res.writeHead(404, {"Content-Type": "text/plain"});
// 		res.write('erreur');
// 	}
//     res.end();
// });
// server.listen(8080);

var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    }
    else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    res.end();
});
server.listen(8080);