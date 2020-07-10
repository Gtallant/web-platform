import React from 'react';
import S from './appBar.style';
import { PropTypes } from 'prop-types';

function AppBar({ color, fontColor, elevation, className, children}) {
  return (
    <S.container className={`${className} app_bar`} color={color} elevation={elevation}>
        <S.contents fontColor={fontColor} fullbleed>
          {children}
        </S.contents>
    </S.container>
  );
}

AppBar.propTypes = {
  color: PropTypes.string,
  fontColor: PropTypes.string,
  elevation: PropTypes.number,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]),
};

AppBar.defaultProps = {
  elevation: 3,
}

export default AppBar;