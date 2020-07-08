import React from 'react';
import { withKnobs, select, color } from "@storybook/addon-knobs";
import AppBar from './appBar';
import defaultTheme from '../themeProvider/defaultTheme';
import Headline from './../../atoms/headline/headline';
import Column from '../../atoms/column/column';
import Icon from '../../atoms/icon/icon';

export default {
  component: AppBar,
  title: 'Molecules/AppBar',
  decorators: [withKnobs]
};

console.log(defaultTheme.colors);

export const basic = () => (
  <AppBar color={select('Color', Object.values(defaultTheme.colors))}>
    <Headline level={1}>App Bar</Headline>
  </AppBar>
);

export const withIcon = () => (
  <AppBar color={select('Color', Object.values(defaultTheme.colors))}>
    <Column align='left' width='shrink'>
      <Icon name='MENU' />
    </Column>
    <Column>
      <Headline level={1}>App Bar</Headline>
    </Column>
    <Column align='right' width='shrink'>
      <Icon name='MAGNIFYING_GLASS' />
    </Column>
  </AppBar>
);