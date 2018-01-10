import BaseSVGDrawer from './BaseSVGDrawer'
import ColorUtils from '../utils/ColorUtils'
import SOLLA_CONFIG from '../utils/contants'

export default class BackgroundDrawer extends BaseSVGDrawer {
  private fillColor: string
  init(): any {
    this.fillColor = ColorUtils.getRandomColor()
  }

  draw(): any {
    this.drawer.rect(SOLLA_CONFIG.WIDTH, SOLLA_CONFIG.HEIGHT).attr({ fill: this.fillColor })
    return this.drawer.svg()
  }
}
