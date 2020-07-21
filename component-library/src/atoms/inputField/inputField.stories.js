import React from 'react';
import { withKnobs, select, number } from "@storybook/addon-knobs";
import Input from './inputField';
import defaultTheme from '../../molecules/themeProvider/defaultTheme';
import Row from '../row/row';
import Column from '../column/column';

export default {
  component: Input,
  title: 'Atoms/Input Field',
  decorators: [withKnobs]
};

export const basic = () => {
  const knobs = {
    color: select('Input Color', Object.values(defaultTheme.colors)),
    background: select('Row Background', Object.values(defaultTheme.colors)),
    colSpan: number('Column Span', 4),
  }
  return (
    <Row align="center" background={knobs.background}>
      <Column width={knobs.colSpan}>
        <Input name="Demo" textColor={knobs.color} />
      </Column>
    </Row>
  );
};