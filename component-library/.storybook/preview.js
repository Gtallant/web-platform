import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeProvider from '../src/molecules/themeProvider/themeProvider';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);