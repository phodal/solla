// returns a window with a document and an svg root node 
const window   = require('svgdom')
const SVG      = require('svg.js')(window)
const document = window.document
 
// create svg.js instance 
const draw = SVG(document.documentElement)
 
// use svg.js as normal 
draw.rect(100,100).fill('yellow').move(50,50)
 
// get your svg as string 
console.log(draw.svg())
// or 
console.log(draw.node.outerHtml)
