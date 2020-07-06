import React from 'react';
import { addDecorator } from '@storybook/react';
import StoryContainer from './../src/utils/storyContainer/storyContainer';
import { addParameters } from '@storybook/react';

addParameters({
  options: {
    showRoots: true,
  },
});

addDecorator(storyFn => <StoryContainer>{storyFn()}</StoryContainer>);