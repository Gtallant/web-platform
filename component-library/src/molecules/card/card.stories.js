import React from 'react';
import styled from 'styled-components';
import Card from './card';
import { withKnobs, number, select, boolean } from "@storybook/addon-knobs";

export default {
  component: Card,
  title: 'Molecules/Card',
  decorators: [withKnobs]
};

const Content = styled.div`
  height: ${props => props.height}px;
  width: 100%;
`;

export const basic = () => {
  return (
    <Card elevation={number('Elevation', 1)} corner={number('Corner', 3)}>
      <Content height={number('Height', 100)} />
    </Card>
  );
};