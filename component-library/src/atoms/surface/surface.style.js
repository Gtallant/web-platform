import styled from 'styled-components';

function createShadow(elevation) {
  if(elevation == 0) {
    return '';
  }
  let shadowCSS = `box-shadow: 0 1px 1px rgba(0, 0, 0, .33)`;
  const numLevels = Math.min(elevation * 2.5 + 3, 25);

  for (let i = 1; i < numLevels; i++) {
    const e = i * 3;
    shadowCSS = `${shadowCSS},
    0 ${e + 5}px ${Math.abs(2.5*e - 3)}px rgba(0, 0, 0, ${Math.min(.33, 1 - i/numLevels)})
    `;
  }
  console.log(shadowCSS);
  return `${shadowCSS};`;
}

export default styled.div`
  position: relative;
  z-index: ${props => props.elevation};
  background: ${props => props.theme.colors.surface};
  opacity: .25;
  ${props => createShadow(props.elevation)}
`;