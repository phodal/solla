import BackgroundDrawer from './drawer/BackgroundDrawer'
import BaseSVGDrawer from './drawer/BaseSVGDrawer'
import VSDrawer from './drawer/VSDrawer'
import LowPolyDrawer from './drawer/LowPolyDrawer'

const fs = require('fs')

export default class Solla {
  private options: any

  constructor (options: any) {
    this.options = options
  }

  async generate () {
    let svgDrawer = new BaseSVGDrawer()
    let type = this.options['type']

    if (type === 'BG') {
      svgDrawer = new BackgroundDrawer()
    } else if (type === 'VS') {
      svgDrawer = new VSDrawer(this.options.stacks)
    } else if (type === 'LP') {
      svgDrawer = new LowPolyDrawer()
    }

    await svgDrawer.init()
    fs.writeFileSync('output.svg', await svgDrawer.draw(), 'utf8')
  }
}
