import BaseSVGDrawer from './BaseSVGDrawer'
import ColorUtils from '../utils/ColorUtils'

export default class BackgroundDrawer extends BaseSVGDrawer {
  private fillColor: string
  init(): any {
    this.fillColor = ColorUtils.getRandomColor()
  }

  draw(): any {
    console.log(this.fillColor)
    this.drawer.rect(1800, 1000).attr({ fill: this.fillColor })
    return this.drawer.svg()
  }
}
