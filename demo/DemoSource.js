var VPile = require('absolute/VPile');
var Space = require('absolute/Space');
var LabelInput = require('../LabelInput');
var Button = require('../Button');

new VPile().content([
  new LabelInput()
  	.value("Vuilliot")
  	.label("Nom")
  	.placeholder("Ecrivez votre nom de famille ici")
  	.mainColor('rgb(0, 188, 212)')
  	.onInput(function(value) { console.log('nom', value); }),
  new Space().height(15),
  new LabelInput()
  	.value("Quentin")
  	.label("Prénom")
  	.placeholder("Ecrivez votre prénom ici")
  	.mainColor('rgb(0, 188, 212)')
  	.onInput(function(value) { console.log('prénom', value); }),
  new Space().height(15),
  new Button()
    .value("Valider")
    .bgColor('rgb(0, 188, 212)')
    .hoverBgColor('rgb(50, 218, 242)')
    .textColor('white'),
])
.top(10).left(10).height(50).width(200).parentNode(document.body);
