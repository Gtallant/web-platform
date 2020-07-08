import React from 'react';
import ICON_LIBRARY from './assets';
import I from './icon.style';
import { PropTypes } from 'prop-types';
import { withTheme } from 'styled-components';

function Icon({name, scale, color, className, theme}) {
  return (
    <I className={`${className} icon`} color={color} scale={scale}>
      {ICON_LIBRARY[name]()}
    </I>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  scale: PropTypes.number,
  color: PropTypes.string,
} 

export default withTheme(Icon);