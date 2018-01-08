// returns a window with a document and an svg root node
const window = require('svgdom')
const SVG = require('svg.js')(window)
const document = window.document
const fs = require('fs')

const draw = SVG(document.documentElement).size(1800, 1000)

export default class Solla {
  draw() {
    draw.rect(1800, 1000).attr({ fill: '#f06' })
    let svgContent = draw.svg()
    fs.writeFileSync('output.svg', svgContent, 'utf8')
  }
}
