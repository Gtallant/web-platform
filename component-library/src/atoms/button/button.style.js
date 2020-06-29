import styled from 'styled-components';

const shared = styled.div`
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
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
`;

const background = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: all .2s ease-in-out;
`;

const text = styled(shared)`
    box-shadow: none;
    .bkgd {
        background-color: ${props => props.theme.colors.primary};
        opacity: 0;
    }
    &:hover,
    &:active,
    &:focus {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-width: 2px;
        margin: 0px;
    }
`;

const contained = styled(shared)`
    color: ${props => props.theme.colors.on_primary};
    .bkgd {
        background-color: ${props => props.theme.colors.primary};
        opacity: 1;
    }
    &:hover,
    &:active,
    &:focus {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
};