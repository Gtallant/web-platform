import React from 'react';
import S from './headline.style';

function Headline({ level, children}) {
    if (level === 1) {
        return (<S.h1>{children}</S.h1>);
    } else if (level === 2) {
        return (<S.h2>{children}</S.h2>);
    } else if (level === 3) {
        return (<S.h3>{children}</S.h3>);
    } else if (level === 4) {
        return (<S.h4>{children}</S.h4>);
    } else if (level === 5) {
        return (<S.h5>{children}</S.h5>);
    }
    return (<S.h6>{children}</S.h6>);
}
export default Headline;