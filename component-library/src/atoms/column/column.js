import React from 'react';
import PropTypes from 'prop-types';
import S from './column.style';

function Column({width, align, className, children}) {
  return (
    <S className={`${className ? className : ''} column ${align ? `column--${align}` : ''}`} width={width} align={align}>
      {children}
    </S>
  );
}

Column.propTypes = {
  width: PropTypes.number,
  align: PropTypes.string,
};

Column.defaultProps = {
  width: 'grow'
};

export default Column;