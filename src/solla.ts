import BackgroundDrawer from './drawer/BackgroundDrawer'
import BaseSVGDrawer from './drawer/BaseSVGDrawer'
import VSDrawer from './drawer/VSDrawer'

const fs = require('fs')

export default class Solla {
  private options: any
  constructor(options: any) {
    this.options = options
  }

  generate() {
    let svgDrawer = new BaseSVGDrawer()

    if (this.options['type'] === 'BG') {
      svgDrawer = new BackgroundDrawer()
    } else if (this.options['type'] === 'VS') {
      svgDrawer = new VSDrawer(this.options.stacks)
    } else {
      return
    }

    svgDrawer.init()
    fs.writeFileSync('output.svg', svgDrawer.draw(), 'utf8')
  }
}
