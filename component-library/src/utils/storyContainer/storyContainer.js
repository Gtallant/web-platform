import React from 'react';
import ThemeProvider from '../../molecules/themeProvider/themeProvider';
import S from './storyContainer.style';

function StoryContainer({children}) {
  return (
    <S>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </S>
  );
}
export default StoryContainer;