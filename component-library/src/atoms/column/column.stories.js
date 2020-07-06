import React from 'react';
import styled from 'styled-components';
import Surface from '../surface/surface';
import { withKnobs, number, select } from "@storybook/addon-knobs";
import Column from './column';

export default {
  component: Column,
  title: 'Atoms/Column',
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
  return (
    <Column width={number("Column Width", 1)} align={select("Self Align", ALIGN_OPTIONS, 'center')}>
      <Surface>
        <Content height={number("Height", 100)} />
      </Surface>
    </Column>
  );
};