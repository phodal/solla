var Trianglify = require('trianglify'); // only needed in node.js
var pattern = Trianglify({width: 200, height: 200})

console.log(pattern.svg().innerHTML);
