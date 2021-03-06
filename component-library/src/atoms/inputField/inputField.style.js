import styled from 'styled-components';

export default styled.input`
  &.input__field {
    border: none;
    border-bottom: 1px solid ${props => props.textColor ? props.textColor : props.theme.colors.onPrimary}77;
    ${props => props.color ? `color: ${props.color};` : ''}
    width: calc(100% - ${props => props.theme.inputProperties.padding.sides * 2}px);
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#00000022'};
    padding: ${props => `
      ${props.theme.inputProperties.padding.top}px
      ${props.theme.inputProperties.padding.sides}px
      ${props.theme.inputProperties.padding.bottom + 1}px
    `};
    font-size: ${props => props.fontSize ? props.color : props.theme.inputProperties.fontSize}px;
    transition: all ${props => props.animationDuration ? props.animationDuration : props.theme.animationDefaults.duration}s linear;
    margin-bottom: 1px;

    &:focus {
      ${props => props.backgroundColor ? '' : 'background-color: #00000011;'}
      border-bottom: 2px solid ${props => props.accentColor ? props.accentColor : props.theme.colors.primary};
      padding-bottom: ${props => props.theme.inputProperties.padding.bottom}px
    }
  }
`;