import styled from 'styled-components';
import createShadow from './../../utils/createShadow';

export default styled.div`
  position: relative;
  width: 100%;
  z-index: ${props => props.elevation};
  background: ${props => props.color ? props.color : props.theme.colors.surface};
  opacity: 1;
  ${props => createShadow(props.elevation)}
`;