let ShadowHelper = {
  getDropDownEffect: () => {
    return `
<filter id="dropShadow">
  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
  <feOffset dx="4" dy="8" />
  <feMerge>
    <feMergeNode />
    <feMergeNode in="SourceGraphic" />
  </feMerge>
</filter>
`
  }
}

export default ShadowHelper
