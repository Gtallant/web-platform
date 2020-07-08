import styled from 'styled-components';
import Surface from './../../atoms/surface/surface';
import computeResponsiveStyles from '../../utils/computeResponsiveStyles';
import Row from '../../atoms/row/row';

const container = styled(Surface)`
  background: ${props => props.color ? props.color : props.theme.colors.primary};
  ${props => props.height ? `height: ${props.height}px;` : computeResponsiveStyles(props.theme.breakpoints, bp => `height: ${bp.appBar.height}px;`)}
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
`;

const contents = styled(Row)`
  ${props => props.height ? `height: ${props.height*.5}px;` : computeResponsiveStyles(props.theme.breakpoints, bp => `height: ${bp.appBar.height *.5}px;`)}
  ${props => computeResponsiveStyles(props.theme.breakpoints, bp => `margin: ${props.height ? props.height : bp.appBar.height *.25}px ${bp.marginSize}px;`)}
  color: ${props => props.fontColor ? props.fontColor : props.theme.colors.on_primary};

  .row__contents {
    ${props => computeResponsiveStyles(props.theme.breakpoints, bp => `max-width: calc(100% - ${2*bp.marginSize}px); margin: 0;`)}
    justify-content: center;
  }

  .headline {
    ${props => props.height ? `font-size: ${props.height*.5}px;` : computeResponsiveStyles(props.theme.breakpoints, bp => `font-size: ${bp.appBar.height *.5}px;`)}
  }

  .icon {
    svg {
      ${props => props.height ?
        `height: ${props.height*.5}px; width: ${props.height*.5}px;` :
        computeResponsiveStyles(props.theme.breakpoints, bp => `height: ${bp.appBar.height *.3}px; width: ${bp.appBar.height *.3}px;`)
      }

      path {
        fill: ${props =>  props.theme.colors.on_primary}
      }
    }
  }
`;

export default {
  container: container,
  contents: contents,
}