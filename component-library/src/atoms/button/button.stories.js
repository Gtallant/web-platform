import React from 'react';
import { withKnobs, text as textKnob, number, select } from "@storybook/addon-knobs";
import ICON_OPTIONS from './../../utils/iconOptions';
import Button from './button';

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [withKnobs],
};

export const contained = () => (<Button elevation={number('Elevation', 1)}>{textKnob("Button Text", "Click Me")}</Button>);
export const outline = () => (<Button elevation={number('Elevation', 1)} variant="outline">{textKnob("Button Text", "Click Me")}</Button>);
export const flat = () => (<Button  elevation={0} variant="text">{textKnob("Button Text", "Click Me")}</Button>);
export const icon = () => (<Button  elevation={3} icon={select("Icon name", ICON_OPTIONS, 'CHECK')} scale={40} />);