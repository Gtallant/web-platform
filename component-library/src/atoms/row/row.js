import React from 'react';
import S from './row.style';

function Row({align, fullbleed, className, children}) {
  return (
    <S.container  className={`${className} row`} fullbleed={fullbleed}>
      <S.contents className='row__contents' align={align} fullbleed={fullbleed}>
        {children}
      </S.contents>
    </S.container>
  );
}

export default Row;