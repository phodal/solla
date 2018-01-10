import SOLLA_CONFIG from '../utils/contants'

const window = require('svgdom')
const SVG = require('svg.js')(window)
export default class BaseSVGDrawer implements BaseDraw {
  drawer: any = SVG(window.document.documentElement).size(SOLLA_CONFIG.WIDTH, SOLLA_CONFIG.HEIGHT)

  init (): any {
    return undefined
  }

  draw (): any {
    return undefined
  }
}
