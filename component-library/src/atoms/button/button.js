import React from 'react';
import S from './button.style';
import { PropTypes } from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from '../icon/icon';

function Button({ onClick, variant, elevation, icon, scale, theme, className, children}) {
    if (variant === 'text') {
        return (
            <S.text onClick={() => onClick()} className={`${className} button`} elevation={elevation} role="button">
                <S.background className='bkgd' />
                {children}
            </S.text>
        );
    } else if (variant === 'outline') {
        return (
            <S.outline onClick={() => onClick()} className={`${className} button`} elevation={elevation} role="button">
                <S.background className='bkgd' />
                {children}
            </S.outline>
        );
    }
    if (icon) {
      return (
        <S.contained onClick={() => onClick()} className={`${className} button`} elevation={elevation} diameter={scale} role="button">
            <S.background elevation={elevation} className='bkgd' />
            <S.contents elevation={elevation} diameter={scale} className='contents'>
              <Icon name={icon} scale={scale*.5} color={theme.colors.on_primary} />
            </S.contents>
        </S.contained>
      );
    }
    return (
        <S.contained onClick={() => onClick()} className={`${className} button`} elevation={elevation} role="button">
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

export default withTheme(Button);