var VFlex = require('absolute/VFlex');
var _ContentDelegate = require('absolute/_ContentDelegate');
var compose = require('ksf/utils/compose');
var common = require('./common');
var LabelInput = require('absolute/LabelInput');
var Label = require('absolute/Label');

module.exports = compose(_ContentDelegate, function() {
	this._content = new VFlex([
		[this._label = new Label().font({
			family: common.font,
			size: '13px'
		}).height(15)],
		this._input = new LabelInput()
			.onFocus(this._focusStyle.bind(this))
	]).height(46);
	this._input.element.style({
		border: 'none',
		fontFamily: common.font,
		color: '#222'
	});
	this._focusStyle(false);
}, {
	value: function(value) {
		this._input.value(value);
		return this;
	},
	label: function(label) {
		this._label.value(label);
		return this;
	},
	placeholder: function(text) {
		this._input.placeholder(text);
		return this;
	},
	mainColor: function(color) {
		this._mainColor = color;
		return this;
	},
	onInput: function(cb) {
		this._input.onInput(cb);
		return this;
	},
	_focusStyle: function(focus) {
		this._label.color(focus ? this._mainColor : '#AAA');
		this._input.element.styleProp('borderBottom', (focus ? 2 : 1) + 'px solid ' + (focus ? this._mainColor : '#DDD'));
	},
});
