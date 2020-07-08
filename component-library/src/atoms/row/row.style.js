import styled from 'styled-components';

const container = styled.div`
  position: relative;
  width: 100%;
  ${props => {
    const breakpoints = props.theme.breakpoints;
    let styles = '';
    for (let i = 0; i < breakpoints.length; i++) {
      const bp = breakpoints[i];
      styles = `${styles}
        @media (min-width: ${bp.max}px) { 
          margin: ${bp.gutterSize}px ${props.fullbleed ? 0 : bp.marginSize}px;
        }
      `;
    }
    return styles;
  }}
`;

const contents = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: ${props => props.align};
  ${props => {
    const breakpoints = props.theme.breakpoints;
    let styles = '';
    let bp;
    for (let i = 0; i < breakpoints.length - 1; i++) {
      bp = breakpoints[i];
      styles = `${styles}
        @media (max-width: ${bp.max}px) { 
          max-width: ${bp.maxContentWidth}px;
        }
      `;
    }
    bp = breakpoints[breakpoints.length - 1];
    styles = `${styles}
      @media (min-width: ${bp.max + 1}px) { 
        max-width: ${bp.maxContentWidth}px;
      }
    `;
    return styles;
  }}
`;

export default {
  container,
  contents,
}