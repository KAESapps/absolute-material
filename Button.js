var Elmt = require('absolute/Element');
var _ContentDelegate = require('absolute/_ContentDelegate');
var compose = require('ksf/utils/compose');
var common = require('./common');

module.exports = compose(_ContentDelegate, function() {
	this._content = new Elmt('button').height(35).style({
		border: 'none',
		borderRadius: '2px',
		fontFamily: common.font,
		transition: 'background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
		cursor: 'pointer',
		outline: 'none'
	}).on('mouseover', this._handleMouseOver.bind(this))
		.on('mouseout', this._handleMouseOut.bind(this))
		.on('mousedown', this._pressedStyle.bind(this))
		.on('mouseup', this._raisedStyle.bind(this));
	this._raisedStyle();
}, {
	value: function(label) {
		this._content.prop('textContent', label);
		return this;
	},
	bgColor: function(color) {
		this._bgColor = color;
		this._content.styleProp('backgroundColor', color);
		return this;
	},
	hoverBgColor: function(color) {
		this._hoverBgColor = color;
		return this;
	},
	textColor: function(color) {
		this._content.styleProp('color', color);
		return this;
	},
	onAction: function(cb) {
		this._content.on('click', cb);
		return this;
	},
	_handleMouseOver: function() {
		this._content.styleProp('backgroundColor', this._hoverBgColor);
	},
	_handleMouseOut: function() {
		this._content.styleProp('backgroundColor', this._bgColor);
	},
	_pressedStyle: function() {
		this._content.styleProp('boxShadow', '0 0 2px rgba(0, 0, 0, 0.24)');
	},
	_raisedStyle: function() {
		this._content.styleProp('boxShadow', '0 1px 4px rgba(0, 0, 0, 0.24)');
	}
});
