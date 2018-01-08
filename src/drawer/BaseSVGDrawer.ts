const window = require('svgdom')
const SVG = require('svg.js')(window)
export default class BaseSVGDrawer implements BaseDraw {
  drawer: any = SVG(window.document.documentElement).size(1800, 1000)
  init(): any {
    return undefined
  }

  draw(): any {
    return undefined
  }
}
