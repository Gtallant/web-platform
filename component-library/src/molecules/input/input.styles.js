import styled from 'styled-components';

const container = styled.div`
  position: relative;
  margin-top: ${props => (props.fontSize ? props.fontSize: props.theme.inputProperties.fontSize) + props.theme.inputProperties.padding.bottom * .75 + props.theme.inputProperties.padding.top}px;
  margin-bottom: ${props => props.theme.inputProperties.padding.bottom}px;

  .body {
    padding-left: ${props => props.theme.inputProperties.padding.sides}px;
    color: ${props => props.theme.colors.error};
  }
`;

export default {
  container: container
}
