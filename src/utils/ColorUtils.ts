const Random = require('random-js')
let randomColor = require('randomcolor') // import the script
let random = new Random()
let Please = require('pleasejs')
let tinycolor = require('tinycolor2')

const GrowthColor = {
  randomGroup: [
    '#001F3F',
    '#0074D9',
    '#7FDBFF',
    '#39CCCC',
    '#3D9970',
    '#2ECC40',
    '#01FF70',
    '#FFDC00',
    '#FF851B',
    '#FF4136',
    '#F012BE',
    '#B10DC9',
    '#85144B',
    '#FFFFFF',
    '#AAAAAA',
    '#DDDDDD',
    '#111111'
  ],
  growth: ['#384452', '#3498db', '#1abc9c', '#e67e22', '#e74c3c'],
  redGroup: ['#2E112D', '#540032', '#C9283E', '#F0433A']
}

let ColorUtils = {
  getCustomRandomColor: () => {
    let value = random.integer(0, GrowthColor.randomGroup.length)
    return GrowthColor.randomGroup[value]
  },
  getRandomColor: () => {
    return randomColor()
  },
  getGrowthColor: {},
  getRedColor: (pos: number) => {
    return GrowthColor.redGroup[pos]
  },
  getHappyColor: () => {
    let hsv = tinycolor(ColorUtils.getRandomColor()).toHsv()
    let color = Please.make_scheme(
      { h: hsv.h, s: hsv.s, v: hsv.v },
      {
        scheme_type: 'triadic',
        format: 'hex'
      }
    )

    return color
  }
}

export default ColorUtils
