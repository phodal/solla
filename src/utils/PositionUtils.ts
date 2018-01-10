import SOLLA_CONFIG from '../utils/contants'

let PositionUtils = {
  getPosition: (size: number, index: number, viewBox: any): SollaPosition => {
    let iconWidth = SOLLA_CONFIG.ICON.WIDTH
    let iconHeight = SOLLA_CONFIG.ICON.HEIGHT
    if (viewBox) {
      let pos = viewBox.split(' ')
      iconWidth = pos[2]
      iconHeight = pos[3]
    }

    let defaultX = SOLLA_CONFIG.WIDTH / 2 - iconWidth / 2
    let defaultY = SOLLA_CONFIG.HEIGHT / 2 - iconHeight / 2

    if (size === 1) {
      return {
        x: defaultX,
        y: defaultY
      }
    }

    function getXPosition () {
      return SOLLA_CONFIG.WIDTH / (size + 1) * (index + 1) - iconWidth / 2
    }

    return {
      x: getXPosition(),
      y: defaultY
    }
  }
}

export default PositionUtils
