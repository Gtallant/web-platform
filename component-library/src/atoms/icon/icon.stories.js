import React from 'react';
import { withKnobs, select, number, color } from "@storybook/addon-knobs";
import ICON_OPTIONS from '../../utils/iconOptions';
import Icon from './icon';

export default {
  component: Icon,
  title: 'Atoms/Icon',
  decorators: [withKnobs]
};

export const basic = () => {
  const knobs = {
    name: select("Icon name", ICON_OPTIONS, 'CHECK'),
    scale: number("Scale", 16),
  }
  return (<Icon name={knobs.name} scale={knobs.scale} color={color('Color', '#000000')} />);
};