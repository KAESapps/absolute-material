var Button = require('../Button');

new Button()
  .value("Mon beau bouton")
  .bgColor('rgb(0, 188, 212)').hoverBgColor('rgb(50, 218, 242)').textColor('white')
  .onAction(function() { console.log('click'); })
  .top(10).left(10).height(35).width(150).parentNode(document.body);
