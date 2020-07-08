import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import Body from './body';
import faker from 'faker';

export default {
  component: Body,
  title: 'Atoms/Body',
  decorators: [withKnobs],
};

export const level_one = () => (<Body level={1}>{text("Sample Text", faker.lorem.paragraph(5))}</Body>);
export const level_two = () => (<Body level={2}>{text("Sample Text", faker.lorem.paragraph(5))}</Body>);