import React from 'react';
import { ThemeProvider } from "styled-components";
import defaultTheme from './defaultTheme';

import ResetStyles from '../../utils/resetStyles/resetStyles';
import GlobalStyles from '../../utils/globalStyles/globalStyles';

function Provider({children}) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <ResetStyles />
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}

export default Provider;