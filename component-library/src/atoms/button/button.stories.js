import React from 'react';
import { withKnobs, text as textKnob } from "@storybook/addon-knobs";
import Button from './button';

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [withKnobs],
};

export const contained = () => (<Button>{textKnob("Button Text", "Click Me")}</Button>);
export const outline = () => (<Button variant="outline">{textKnob("Button Text", "Click Me")}</Button>);
export const text = () => (<Button variant="text">{textKnob("Button Text", "Click Me")}</Button>);