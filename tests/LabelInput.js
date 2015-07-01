var LabelInput = require('../LabelInput');

new LabelInput()
  .value("Mon texte court")
  .label("Description")
  .placeholder("Ecrire ici quelques mots")
  .mainColor('rgb(0, 188, 212)')
  .onInput(function(value) { console.log('input', value); })
  .top(10).left(10).height(50).width(150).parentNode(document.body);
