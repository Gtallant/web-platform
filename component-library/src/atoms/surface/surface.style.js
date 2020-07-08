import styled from 'styled-components';
import createShadow from './../../utils/createShadow';

export default styled.div`
  position: relative;
  width: 100%;
  z-index: ${props => props.elevation};
  background: ${props => props.theme.colors.surface};
  opacity: .25;
  ${props => createShadow(props.elevation)}
`;