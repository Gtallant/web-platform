import React from 'react';
import S from './row.style';

function Row({align, fullbleed, background, className, children}) {
  return (
    <S.container background={background}  className={`${className} row`} fullbleed={fullbleed}>
      <S.contents className='row__contents' align={align} fullbleed={fullbleed}>
        {children}
      </S.contents>
    </S.container>
  );
}

export default Row;