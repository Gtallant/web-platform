import React from 'react';
import { withKnobs, select, color, number } from "@storybook/addon-knobs";
import Input from './input';
import defaultTheme from '../themeProvider/defaultTheme';
import Row from '../../atoms/row/row';
import Column from '../../atoms/column/column';

export default {
  component: Input,
  title: 'Molecules/Input',
  decorators: [withKnobs]
};

export const basic = () => {
  const knobs = {
    color: select('Text Color', Object.values(defaultTheme.colors), defaultTheme.colors.on_background),
    accent: select('Accent Color', Object.values(defaultTheme.colors, defaultTheme.colors.primary)),
    colSpan: number('Column Span', 4),
  }
  return (
    <Row align="center">
      <Column textColor={knobs.color} accentColor={knobs.accent}  width={knobs.colSpan}>
        <Input textColor={knobs.color} accentColor={knobs.accent} name="Demo" id="demo-id" />
      </Column>
    </Row>
  );
};

export const password = () => {
  const knobs = {
    color: select('Text Color', Object.values(defaultTheme.colors), defaultTheme.colors.on_background),
    accent: select('Accent Color', Object.values(defaultTheme.colors, defaultTheme.colors.primary)),
    colSpan: number('Column Span', 4),
  }
  return (
    <Row align="center">
      <Column textColor={knobs.color} accentColor={knobs.accent}  width={knobs.colSpan}>
        <Input textColor={knobs.color} accentColor={knobs.accent} name="Password" id="password-id" type="password" />
      </Column>
    </Row>
  );
};