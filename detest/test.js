var Trianglify = require('trianglify'); // only needed in node.js

var colorFunc = function(x, y) {
  return 'hsl('+Math.floor(Math.abs(x*y)*360)+',80%,60%)';
};
var pattern = Trianglify({
  color_function: colorFunc,
  width: 200,
  height: 200
})

console.log('<svg width="2370" height="2500" viewBox="0 0 256 270" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">' + pattern.svg().innerHTML + '</svg>');
