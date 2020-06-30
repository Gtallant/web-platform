import styled from 'styled-components';
const ICON_DIRECTORY = '/icons/';

export default styled.i`
  content: url('${ICON_DIRECTORY}${props => props.name}.svg');
  height: ${props => props.scale}px;
  width: ${props => props.scale}px;
`;