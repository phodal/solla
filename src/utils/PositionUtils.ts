import SOLLA_CONFIG from '../utils/contants'

let PositionUtils = {
  getPosition: (size: number, index: number): SollaPosition => {
    let defaultX = SOLLA_CONFIG.WIDTH / 2 - SOLLA_CONFIG.ICON.WIDTH / 2
    let defaultY = SOLLA_CONFIG.HEIGHT / 2 - SOLLA_CONFIG.ICON.HEIGHT / 2

    if (size === 1) {
      return {
        x: defaultX,
        y: defaultY
      }
    }

    function getXPosition () {
      return SOLLA_CONFIG.WIDTH / (2 + size - 1) * (index + 1) - SOLLA_CONFIG.ICON.WIDTH / 2
    }

    return {
      x: getXPosition(),
      y: defaultY
    }
  }
}

export default PositionUtils
