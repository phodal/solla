import BaseSVGDrawer from './BaseSVGDrawer'
let Trianglify = require('trianglify')

export default class LowPolyDrawer extends BaseSVGDrawer {
  init(): any {}

  draw(): any {
    let colorFunc = function(x: number, y: number) {
      return 'hsl(' + Math.floor(Math.abs(x * y) * 360) + ',80%,60%)'
    }
    let pattern = Trianglify({
      color_function: colorFunc,
      width: 1800,
      height: 1000
    })

    return (
      '<svg width="1800" height="1000" viewBox="0 0 1800 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">' +
      pattern.svg().innerHTML +
      '</svg>'
    )
  }
}
