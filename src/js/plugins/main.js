

// set my arrays
var emoBasics = ['eyeliner','hairspray','skinny jeans','band t-shirt','side lip piercing','black lipstick','polka dots','side fringe','leopard print','plimsoles', 'skulls', 'desert scarf', 'wrist bandana', 'plastic jewellery', 'studded belt', 'rucksack', 'tights with holes', 'stripey socks', 'fingerless gloves', 'black nail varnish', 'stripey jumper'];

var action = ['broke','trapped','tricked','trampled','destroyed','stole','ate','murdered','shot','parted','judged','stopped','stamped on', 'crushed','awoke','stabbed','cracked','smashed','burned','tore','stretched','squeezed', 'electrified'];

var heart = ['black', 'bleeding', 'dead', 'shattered', 'crying', 'stone', 'silent', 'beating', 'battered', 'bruised', 'crystal', 'glass', 'lonely', 'miserable', 'anxious', 'blue', 'blackened', 'fragile', 'paper', 'porcelain', 'flammable', 'crooked', 'elastic'];


//find the length of my arrays
var emoArrayLength = emoBasics.length;

// I want action and heart to be the same length
var actionArrayLength = action.length;
var heartArrayLength = heart.length;

//var randomNum = Math.floor((Math.random()*10) +1 );
var el = document.getElementById('info');
//el.innerHTML = '<h2> random number </h2> <p>' + randomNum + '</p>';

var emoArrayPosition = Math.floor(Math.random() * emoArrayLength);
var emoOutput = document.getElementById('emo');

el.innerHTML = 'I am array position ' + emoArrayPosition;
//randomOutput.innerHTML = '<p> I am array position ' + randomArrayPosition;
emoOutput.innerHTML = '<p> I am emo basic: ' + emoBasics[emoArrayPosition] + '</p>';

var actionArrayPosition = Math.floor(Math.random() * actionArrayLength);
var actionOutput = document.getElementById('action');
actionOutput.innerHTML = action[actionArrayPosition];

var heartArrayPosition = Math.floor(Math.random() * heartArrayLength);
var heartOutput = document.getElementById('heart');
heartOutput.innerHTML = heart[heartArrayPosition];








///create app to hang all the functions off
///tidy up js

// $( document ).ready(function() {

// });
