import React from 'react';
import Surface from './../../atoms/surface/surface';
import S from './card.style';
import { PropTypes } from 'prop-types';

function Card({elevation, corner, themeOverride, className, children}) {
  return (
    <S className={`${className} card`} elevation={elevation} corner={corner} themeOverride={themeOverride}>
      {children}
    </S>
  );
}

Surface.propTypes = {
  elevation: PropTypes.number,
  themeOverride: PropTypes.object,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]),
};

Surface.defaultProps = {
  elevation: 1,
  themeOverride: null,
  children: null,
};

export default Card;