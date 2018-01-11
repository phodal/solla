let GradientHelper = {
  getLinearGradient: (color: string, id: string) => {
    return `
<linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" style="stop-color:rgb(231,41,244);
stop-opacity:1"/>
  <stop offset="100%" style="stop-color:rgb(231,41,0);
stop-opacity:1"/>
</linearGradient>
`
  },
  getRadialGradient: () => {
    return `
<radialGradient cx="0%" cy="0%" fx="0%" fy="0%" r="100%" gradientTransform="translate(0.000000,0.000000),scale(0.833333,1.000000),translate(-0.000000,-0.000000)" id="radialGradient-1">
    <stop stop-color="#CECE91" offset="0%"></stop>
    <stop stop-color="#FF0000" offset="100%"></stop>
</radialGradient>
`
  }
}

export default GradientHelper
