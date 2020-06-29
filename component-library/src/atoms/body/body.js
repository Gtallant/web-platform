import React from 'react';
import S from './body.style';

function Body({ level, children}) {
    if (level === 2) {
        return (<S.b2>{children}</S.b2>);
    }
    return (<S.b1>{children}</S.b1>);
}
export default Body;