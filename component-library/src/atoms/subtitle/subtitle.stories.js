import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import faker from 'faker';
import Subtitle from './subtitle';

export default {
  component: Subtitle,
  title: 'Atoms/Subtitle',
  decorators: [withKnobs],
};

export const level_one = () => (<Subtitle level={1}>{text("Subtitle Text", faker.lorem.words(3))}</Subtitle>);
export const level_two = () => (<Subtitle level={2}>{text("Subtitle Text", faker.lorem.words(3))}</Subtitle>);