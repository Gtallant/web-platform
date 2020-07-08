import React from 'react';
import S from './appBar.style';
import { PropTypes } from 'prop-types';

function AppBar({ color, className, children}) {
  return (
    <S.container className={`${className} app_bar`} color={color} elevation={4}>
        <S.contents fullbleed>
          {children}
        </S.contents>
    </S.container>
  );
}

AppBar.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]),
};

export default AppBar;