import React from 'react';
import ThemeProvider from '../../molecules/themeProvider/themeProvider';
import S from './storyContainer.style';

function StoryContainer({children}) {
  return (
    <ThemeProvider>
      <S>
        {children}
      </S>
    </ThemeProvider>
  );
}
export default StoryContainer;