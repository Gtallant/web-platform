import styled from 'styled-components';

export default styled.label`
  ${props => props.textColor ? `color: ${props.textColor};` : ''}
  position: absolute;
  pointer-events: none;
  line-height: normal;
  top: ${props => props.theme.inputProperties.padding.top}px;
  left: ${props => props.theme.inputProperties.padding.sides}px;
  font-size: ${props => props.fontSize ? props.fontSize : props.theme.inputProperties.fontSize}px;
  transition: all ${props => props.animationDuration ? props.animationDuration : props.theme.animationDefaults.duration}s ease-in-out;

  &.focus {
    top: ${props => props.theme.inputProperties.padding.top - props.fontSize ? props.fontSize * .3 : props.theme.inputProperties.fontSize * .3}px;
    font-size: ${props => props.fontSize ? props.fontSize / 2 : props.theme.inputProperties.fontSize * .6}px;
    font-weight: 500;
    ${props => {
      if(props.accentColor) {
        return `color: ${props.accentColor};`;
      } else if(props.textColor) {
        return `color: ${props.textColor};`;
      }
      return '';
    }
  }
  }
`;