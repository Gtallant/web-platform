import React from 'react';
import PropTypes from 'prop-types';
import S from './surface.style';

function Surface({elevation, themeOverride, className, children}) {
  const overrideTheme = (parentTheme) => {
    let newTheme = parentTheme;
    if(themeOverride) {
      newTheme = Object.assign(themeOverride, parentTheme);
    }
    return newTheme;
  }
  if (themeOverride) {
    return (
      <S className={className} theme={overrideTheme}>
        {children}
      </S>
    );
  }
  return (
    <S className={className} elevation={elevation}>
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

export default Surface;