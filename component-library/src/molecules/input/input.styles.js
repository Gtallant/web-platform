import styled from 'styled-components';

const container = styled.div`
  position: relative;
  border-bottom: 1px solid ${props => props.textColor ? props.textColor : props.theme.colors.onPrimary}77;
  margin-bottom: ${props => props.theme.inputProperties.padding.bottom}px;

  &.focus {
    border-bottom: 2px solid ${props => props.accentColor ? props.accentColor : props.theme.colors.primary};
  }
`;

export default {
  container: container
}
