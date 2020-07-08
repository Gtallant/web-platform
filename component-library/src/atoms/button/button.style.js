import styled from 'styled-components';
import createShadow from './../../utils/createShadow';

const SHADOW_CONFIG = {
  hOffset: 0,
  vOffset: -1,
  amplitude: 1.5,
  blurOffset: 2,
  maxOpacity: .15,
};

const circleStyles = diameter => `width: ${diameter}px; height: ${diameter}px;`;

const shared = styled.div `
    font-family: Roboto, Arial, Sans;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.primary};
    display: inline-block;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    ${props => props.diameter ? circleStyles(props.diameter) : 'padding: 4px 8px;'}
    border-radius: ${props => props.diameter ? props.diameter/2 : 4}px;
    transition: all .2s ease-in-out;
    ${props => createShadow(props.elevation, SHADOW_CONFIG)}

    &:hover,
    &:active,
    &:focus {
      ${props => createShadow(props.elevation + 1, SHADOW_CONFIG)}
    }
`;

const background = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${props => props.elevation};
    transition: all .2s ease-in-out;
`;

const contents = styled.span `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    ${props => props.diameter ? circleStyles(props.diameter) : ''}
    z-index: ${props => props.elevation + 1};
`;

const text = styled(shared)`
    .bkgd {
        background-color: ${props => props.theme.colors.primary};
        opacity: 0;
    }
    &:hover,
    &:active,
    &:focus {
        .bkgd {
            opacity: 0.12;
        }
    }
`;

const outline = styled(shared)`
    margin: 1px;
    border: 1px solid ${props => props.theme.colors.primary};
    &:hover,
    &:active,
    &:focus {
        border-width: 2px;
        margin: 0px;
    }
`;

const contained = styled(shared)`
    .bkgd {
        background-color: ${props => props.theme.colors.primary};
        opacity: 1;
    }

    .contents {
      color: ${props => props.theme.colors.on_primary};
    }
    &:hover,
    &:active,
    &:focus {
        .bkgd {
            background-color: ${props => props.theme.colors.primary_variant};
        }
    }
`;

export default {
  text: text,
  outline: outline,
  contained: contained,
  background: background,
  contents: contents,
};