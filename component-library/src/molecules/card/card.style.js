import styled from 'styled-components';
import Surface from './../../atoms/surface/surface';

export default styled(Surface)`
  border-radius: ${props => props.corner ? props.corner : props.theme.cardProperties.corner}px;
  ${props => {
    const breakpoints = props.theme.breakpoints;
    const computePadding = props.theme.cardProperties.padding;
    let styles = '';
    for (let i = 0; i < breakpoints.length; i++) {
      const bp = breakpoints[i];
      styles = `${styles}
        @media (min-width: ${bp.max}px) { 
          padding: ${computePadding(bp.gutterSize)}px;
        }
      `;
    }
    return styles;
  }}
`;