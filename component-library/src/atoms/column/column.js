import React from 'react';
import PropTypes from 'prop-types';
import S from './column.style';

function Column({width, align, children}) {
  console.log(align);
  return (
    <S width={width} align={align}>
      {children}
    </S>
  );
}

Column.propTypes = {
  width: PropTypes.number,
  align: PropTypes.string,
};

Column.defaultProps = {
  width: 1
};

export default Column;