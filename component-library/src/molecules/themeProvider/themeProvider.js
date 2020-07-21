import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from "styled-components";
import defaultTheme from './defaultTheme';

import ResetStyles from '../../utils/resetStyles/resetStyles';
import GlobalStyles from '../../utils/globalStyles/globalStyles';

function Provider({theme, children}) {
    return (
        <ThemeProvider theme={theme}>
            <ResetStyles />
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}

Provider.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
};

Provider.defaultProps = {
    theme: defaultTheme,
    children: null,
};

export default Provider;