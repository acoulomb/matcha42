var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message, message2){
    console.log(message, message2);
});

jeu.emit('gameover', 'Vous avez perdu !', 'patate');