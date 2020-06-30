import React from 'react';
import Button from './button';
import faker from 'faker';

export default {
  component: Button,
  title: 'Atoms | Button',
};

export const contained = () => (<Button>{faker.lorem.words(2)}</Button>);
export const outline = () => (<Button variant="outline">{faker.lorem.words(2)}</Button>);
export const text = () => (<Button variant="text">{faker.lorem.words(2)}</Button>);