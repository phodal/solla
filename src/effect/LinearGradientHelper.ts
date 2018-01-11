let LinearGradientHelper = {
  getLinearGradient: (color: string, id: string) => {
    return `
<linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" style="stop-color:rgb(231,41,244);
stop-opacity:1"/>
  <stop offset="100%" style="stop-color:rgb(231,41,0);
stop-opacity:1"/>
</linearGradient>
`
  }
}

export default LinearGradientHelper
