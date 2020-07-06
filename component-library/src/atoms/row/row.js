import React from 'react';
import S from './row.style';

function Row({align, fullbleed, children}) {
  return (
    <S.container fullbleed={fullbleed}>
      <S.contents align={align}>
        {children}
      </S.contents>
    </S.container>
  );
}

export default Row;