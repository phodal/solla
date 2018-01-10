import ColorUtils from '../../src/utils/ColorUtils'

describe('Solla Color test', () => {
  it('should return a red color', () => {
    expect(ColorUtils.getRedColor(0)).toBe('#2E112D')
  })
  it('should return three colors', () => {
    expect(ColorUtils.getHappyColor().length).toBe(3)
  })
})
