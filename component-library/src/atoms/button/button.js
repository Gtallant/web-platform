import React from 'react';
import S from './button.style';
import { PropTypes } from 'prop-types';

function Button({ variant, elevation, children}) {
    if (variant === 'text') {
        return (
            <S.text elevation={elevation} role="button">
                <S.background className='bkgd' />
                {children}
            </S.text>
        );
    } else if (variant === 'outline') {
        return (
            <S.outline elevation={elevation} role="button">
                <S.background className='bkgd' />
                {children}
            </S.outline>
        );
    }
    return (
        <S.contained elevation={elevation} role="button">
            <S.background elevation={elevation} className='bkgd' />
            <S.contents elevation={elevation} className='contents'>
              {children}
            </S.contents>
        </S.contained>
    );
}

Button.propTypes = {
  elevation: PropTypes.number,
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]),
};

Button.defaultProps = {
  elevation: 0,
  variant: 'contained',
  children: null,
};

export default Button;