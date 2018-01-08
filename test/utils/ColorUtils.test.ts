import ColorUtils from '../../src/utils/ColorUtils'

describe('Solla test', () => {
  it('works if true is truthy', () => {
    expect(ColorUtils.getRedColor(0)).toBe('#2E112D')
  })
})
