import React from 'react';
import { addDecorator } from '@storybook/react';
import StoryContainer from './../src/utils/storyContainer/storyContainer';

addDecorator(storyFn => <StoryContainer>{storyFn()}</StoryContainer>);