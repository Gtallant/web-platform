export default function createShadow(elevation, { hOffset, vOffset, amplitude, blurOffset, maxOpacity } = { hOffset: 0, vOffset: 5, amplitude: 2, blurOffset: -3, maxOpacity: .33}) {
  if(elevation == 0) {
    return '';
  }
  let shadowCSS = `box-shadow: 0 1px 1px rgba(0, 0, 0, .33)`;
  const numLevels = Math.min(elevation * amplitude + 3, 25);

  for (let i = 1; i < numLevels; i++) {
    const e = i * amplitude;
    shadowCSS = `${shadowCSS},
    ${hOffset} ${e + vOffset}px ${Math.abs(amplitude*e + blurOffset)}px rgba(0, 0, 0, ${Math.min(maxOpacity, 1 - i/numLevels)})
    `;
  }
  return `${shadowCSS};`;
}