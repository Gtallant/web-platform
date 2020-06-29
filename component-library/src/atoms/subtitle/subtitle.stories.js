import React from 'react';
import Subtitle from './subtitle';

export default {
  component: Subtitle,
  title: 'Atoms/Subtitle',
};

export const level_one = () => (<Subtitle level={1}>Lorem ipsum dolor sit</Subtitle>);
export const level_two = () => (<Subtitle level={2}>Lorem ipsum dolor sit</Subtitle>);