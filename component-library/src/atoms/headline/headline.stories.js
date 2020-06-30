import React from 'react';
import Headline from './headline';

export default {
  component: Headline,
  title: 'Atoms | Headline',
};

export const level_one = () => (<Headline level={1}>Hello World!</Headline>);
export const level_two = () => (<Headline level={2}>Hello World!</Headline>);
export const level_three = () => (<Headline level={3}>Hello World!</Headline>);
export const level_four = () => (<Headline level={4}>Hello World!</Headline>);
export const level_five = () => (<Headline level={5}>Hello World!</Headline>);
export const level_six = () => (<Headline level={6}>Hello World!</Headline>);