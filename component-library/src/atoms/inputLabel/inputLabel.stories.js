import React from 'react';
import { withKnobs, select, boolean, number } from "@storybook/addon-knobs";
import Label from './inputLabel';
import defaultTheme from '../../molecules/themeProvider/defaultTheme';
import Row from '../row/row';
import Column from '../column/column';

export default {
  component: Label,
  title: 'Atoms/Input Label',
  decorators: [withKnobs]
};

export const basic = () => {
  const knobs = {
    color: select('Text Color', Object.values(defaultTheme.colors), defaultTheme.colors.on_background),
    accent: select('Accent Color', Object.values(defaultTheme.colors), defaultTheme.colors.primary),
    colSpan: number('Column Span', 4),
    isFocused: boolean('Focus', false),
  }
  return (
    <Row align="center">
      <Column width={knobs.colSpan}>
        <Label name="Demo" focus={knobs.isFocused} textColor={knobs.color} accentColor={knobs.accent} />
      </Column>
    </Row>
  );
};