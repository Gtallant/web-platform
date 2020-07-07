import React from 'react';
import { withKnobs, text as textKnob, number, select } from "@storybook/addon-knobs";
import { ICON_OPTIONS } from './../../utils/iconOptions';
import Icon from '../icon/icon';
import Button from './button';

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [withKnobs],
};

export const contained = () => (<Button elevation={number('Elevation', 1)}>{textKnob("Button Text", "Click Me")}</Button>);
export const outline = () => (<Button elevation={number('Elevation', 1)} variant="outline">{textKnob("Button Text", "Click Me")}</Button>);
export const flat = () => (<Button  elevation={0} variant="text">{textKnob("Button Text", "Click Me")}</Button>);
export const icon = () => (<Button  elevation={1}><Icon name={select("Icon name", ICON_OPTIONS, 'check')} scale={16} /></Button>);