import React from 'react';
import Body from './body';
import faker from 'faker';

export default {
  component: Body,
  title: 'Atoms/Body',
};

export const level_one = () => (<Body level={1}>{faker.lorem.paragraph(5)}</Body>);
export const level_two = () => (<Body level={2}>{faker.lorem.paragraph(5)}</Body>);