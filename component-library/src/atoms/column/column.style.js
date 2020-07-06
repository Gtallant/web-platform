import styled from 'styled-components';

export default styled.div`
  align-self: ${props => props.align ? props.align : 'auto'};
  
  ${props => {
    const breakpoints = props.theme.breakpoints;
    let styles = '';
    for (let i = 0; i < breakpoints.length; i++) {
      const bp = breakpoints[i];
      styles = `${styles}
        @media (min-width: ${bp.max}px) { 
          width: calc(${Math.min(props.width*100/bp.numCol, 100)}% - ${bp.marginSize}px);
          margin: 0 ${bp.marginSize / 2}px;
        }
      `;
    }
    return styles;
  }}

`;