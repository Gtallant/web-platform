import styled from 'styled-components';
import computeResponsiveStyles from '../../utils/computeResponsiveStyles';

const getAlignmentCSS = align => {
  if (align === 'left') {
    return 'margin-right: auto;';
  } else if (align === 'right') {
    return 'margin-left: auto;'
  }
}

const getResponsiveWidths = (theme, width) => computeResponsiveStyles(theme, bp => {
  let styles = '';
  if (typeof width === 'number') {
    styles = `width: calc(${Math.min(width*100/bp.numCol, 100)}`;
  }
  if (width === 'grow') {
    styles = `flex-basis: calc(${Math.min(100/bp.numCol, 100)}}% - ${bp.marginSize}px); margin: 0 ${bp.marginSize / 2}px;`;
  }
  return styles;
})

export default styled.div`
  ${props => props.align ? getAlignmentCSS(props.align) : ''};
  
  ${props => {
    const { width, theme } = props;
    let styles = getResponsiveWidths(theme.breakpoints, width);
    if (typeof width !== 'number') {
      styles = `${styles}
        ${width === 'grow' ? 'flex-grow: 1; width: 100%;' : ''}
        ${width === 'shrink' ? 'flex-shrink: 1;' : ''}
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: stretch;
      `;
    }
    return styles;
  }}

`;