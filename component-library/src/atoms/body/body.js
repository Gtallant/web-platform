import React from 'react';
import S from './body.style';

function Body({ level, className, children}) {
    if (level === 2) {
        return (<S.b2 className={`${className} body`}>{children}</S.b2>);
    }
    return (<S.b1 className={`${className} body`}>{children}</S.b1>);
}
export default Body;