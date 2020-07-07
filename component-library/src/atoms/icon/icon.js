import React from 'react';
import ICON_LIBRARY from './assets';
import I from './icon.style';

function StoryContainer({name, scale, color}) {
  return (
    <I color={color} scale={scale}>
      {ICON_LIBRARY[name]()}
    </I>
  );
}
export default StoryContainer;