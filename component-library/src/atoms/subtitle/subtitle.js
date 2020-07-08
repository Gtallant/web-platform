import React from 'react';
import S from './subtitle.style';

function Subtitle({ level, className, children}) {
    if (level === 2) {
        return (<S.s2  className={`${className} subtitle`}>{children}</S.s2>);
    }
    return (<S.s1  className={`${className} subtitle`}>{children}</S.s1>);
}
export default Subtitle;