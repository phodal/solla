import SOLLA_CONFIG from '../utils/contants'

let PositionUtils = {
  getBasePosition: (size: number) => {
    // return SOLLA_CONFIG.WIDTH / (size + 1) * (index + 1)
  },
  getPosition: (size: number, index: number, viewBox: any): SollaPosition => {
    let iconWidth = SOLLA_CONFIG.ICON.WIDTH
    let iconHeight = SOLLA_CONFIG.ICON.HEIGHT
    if (viewBox) {
      let pos = viewBox.split(' ')
      iconWidth = pos[2]
      iconHeight = pos[3]
    }

    let yPos = SOLLA_CONFIG.HEIGHT / 2 - iconHeight / 2
    let xPos = SOLLA_CONFIG.WIDTH / (size + 1) * (index + 1) - iconWidth / 2

    if (viewBox) {
      let pos = viewBox.split(' ')
      let x = pos[0]
      let y = pos[1]

      xPos = xPos - x
      yPos = yPos - y
    }

    return {
      x: xPos,
      y: yPos
    }
  }
}

export default PositionUtils
