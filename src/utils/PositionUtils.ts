import SOLLA_CONFIG from '../utils/contants'

let PositionUtils = {
  getPosition: (size: number, index: number): SollaPosition => {
    if (size === 1) {
      return {
        x: SOLLA_CONFIG.WIDTH / 2 - SOLLA_CONFIG.ICON.WIDTH / 2,
        y: SOLLA_CONFIG.HEIGHT / 2 - SOLLA_CONFIG.ICON.HEIGHT / 2
      }
    }

    return {
      x: SOLLA_CONFIG.WIDTH / (2 + index) - SOLLA_CONFIG.ICON.WIDTH / 2,
      y: SOLLA_CONFIG.HEIGHT / (2 + index) - SOLLA_CONFIG.ICON.HEIGHT / 2
    }
  }
}

export default PositionUtils
