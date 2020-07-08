import React from 'react';
import styled from 'styled-components';
import Surface from '../surface/surface';
import { withKnobs, number, select, boolean, color } from "@storybook/addon-knobs";
import Row from './row';
import Column from '../column/column';

export default {
  component: Row,
  title: 'Atoms/Row',
  decorators: [withKnobs]
};

const Content = styled.div`
  height: ${props => props.height}px;
  width: 100%;
`;

const ALIGN_OPTIONS = [
  'flex-start',
  'center',
  'flex-end'
];

export const basic = () => {
  const knobs = {
    background: color('Color', undefined, 'Row Properties'),
    height: number("Height", 100, {min: 0, max: 999}, 'Row Content'),
    align: select("Alignment", ALIGN_OPTIONS, 'center', 'Row Properties'),
    fullbleed: boolean('Full Bleed', false, 'Row Properties'),
    numCol: number("Column Count", 1, {min: 0, max: 8}, 'Row Content'),
  }
  let columns = [...new Array(knobs.numCol)];
  const col = columns.map(ele => {
    return (
      <Column key={ele}>
        <Surface>
          <Content height={knobs.height}>&nbsp;</Content>
        </Surface>
      </Column>
    );
  });
  return (
    <Row background={knobs.background} align={knobs.align} fullbleed={knobs.fullbleed}>
      {col}
    </Row>
  );
};