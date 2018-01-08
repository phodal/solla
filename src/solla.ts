import BackgroundDrawer from './drawer/BackgroundDrawer'
import BaseSVGDrawer from './drawer/BaseSVGDrawer'

const fs = require('fs')

export default class Solla {
  private type: string
  constructor(type: string) {
    this.type = type
  }

  generate() {
    let svgDrawer = new BaseSVGDrawer()

    if (this.type === 'Background') {
      svgDrawer = new BackgroundDrawer()
    }
    fs.writeFileSync('output.svg', svgDrawer.draw(), 'utf8')
  }
}
