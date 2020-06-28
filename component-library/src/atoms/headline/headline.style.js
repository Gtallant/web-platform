import styled from 'styled-components';

const head_one = styled.h1`
    font-family: Roboto, Arial, Sans;
    font-weight: 300;
    font-size: 96px;
    letter-spacing: -1.5px;
`;

const head_two = styled.h2`
    font-family: Roboto, Arial, Sans;
    font-weight: 300;
    font-size: 60px;
    letter-spacing: -0.5px;
`;

const head_three = styled.h3`
    font-family: Roboto, Arial, Sans;
    font-weight: 400;
    font-size: 48px;
    letter-spacing: 0px;
`;

const head_four = styled.h4`
    font-family: Roboto, Arial, Sans;
    font-weight: 400;
    font-size: 34px;
    letter-spacing: 0.25px;
`;

const head_five = styled.h5`
    font-family: Roboto, Arial, Sans;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0px;
`;

const head_six = styled.h6`
    font-family: Roboto, Arial, Sans;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.15px;
`;

export default {
    h1: head_one,
    h2: head_two,
    h3: head_three,
    h4: head_four,
    h5: head_five,
    h6: head_six,
};