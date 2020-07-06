import React from 'react';
import styled from 'styled-components';
import { withKnobs, number } from "@storybook/addon-knobs";
import Surface from './surface';

export default {
  component: Surface,
  title: 'Atoms/Surface',
  decorators: [withKnobs]
};

const Content = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

export const basic = () => {
  return (
    <Surface elevation={number("Elevation", 1)}>
      <Content height={number("Height", 100)} width={number("Width", 100)} />
    </Surface>
  );
};