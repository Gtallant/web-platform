import React from 'react';
import S from './subtitle.style';

function Subtitle({ level, children}) {
    if (level === 2) {
        return (<S.s2>{children}</S.s2>);
    }
    return (<S.s1>{children}</S.s1>);
}
export default Subtitle;