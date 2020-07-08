import styled from 'styled-components';
const ICON_DIRECTORY = '/icons/';

export default styled.i`
  svg {
    height: ${props => props.scale}px;
    width: ${props => props.scale}px;

    path {
      fill: ${props => props.color ? props.color : props.theme.colors.on_background}
    }
  }
`;