import React from 'react';
import S from './button.style';

function Button({ variant, children}) {
    if (variant === 'text') {
        return (
            <S.text role="button">
                <S.background className='bkgd' />
                {children}
            </S.text>
        );
    } else if (variant === 'outline') {
        return (
            <S.outline role="button">
                <S.background className='bkgd' />
                {children}
            </S.outline>
        );
    }
    return (
        <S.contained role="button">
            <S.background className='bkgd' />
            {children}
        </S.contained>
    );
}
export default Button;