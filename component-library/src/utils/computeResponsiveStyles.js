export default (breakpoints, styleTemplate) => {
  let styles = '';
  for (let i = 0; i < breakpoints.length; i++) {
    const bp = breakpoints[i];
    styles = `${styles}
      @media (min-width: ${bp.max}px) { 
        ${styleTemplate(bp)}
      }
    `;
  }
  return styles;
};