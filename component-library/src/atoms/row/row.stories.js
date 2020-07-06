import React from 'react';
import styled from 'styled-components';
import Surface from '../surface/surface';
import { withKnobs, number, select, boolean } from "@storybook/addon-knobs";
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
  const numCol = number("Column Count", 1);
  let columns = [...new Array(numCol)];
  console.log(columns);
  const col = columns.map(ele => {
    console.log(ele);
    return (
      <Column key={ele}>
        <Surface>
          <Content height={number("Height", 100)} />
        </Surface>
      </Column>
    );
  });
  console.log(col)
  return (
    <Row align={select("Alignment", ALIGN_OPTIONS, 'center')} fullbleed={boolean('Full Bleed', false)}>
      {col}
    </Row>
  );
};