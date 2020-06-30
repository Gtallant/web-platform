import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import Headline from './headline';

export default {
  component: Headline,
  title: 'Atoms | Headline',
  decorators: [withKnobs],
};

export const level_one = () => (<Headline level={1}>{text("Headline Text", "Hello World!")}</Headline>);
export const level_two = () => (<Headline level={2}>{text("Headline Text", "Hello World!")}</Headline>);
export const level_three = () => (<Headline level={3}>{text("Headline Text", "Hello World!")}</Headline>);
export const level_four = () => (<Headline level={4}>{text("Headline Text", "Hello World!")}</Headline>);
export const level_five = () => (<Headline level={5}>{text("Headline Text", "Hello World!")}</Headline>);
export const level_six = () => (<Headline level={6}>{text("Headline Text", "Hello World!")}</Headline>);