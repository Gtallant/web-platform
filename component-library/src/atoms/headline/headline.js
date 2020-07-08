import React from 'react';
import S from './headline.style';

function Headline({ level, className, children}) {
    if (level === 1) {
        return (<S.h1 className={`${className} headline`}>{children}</S.h1>);
    } else if (level === 2) {
        return (<S.h2 className={`${className} headline`}>{children}</S.h2>);
    } else if (level === 3) {
        return (<S.h3 className={`${className} headline`}>{children}</S.h3>);
    } else if (level === 4) {
        return (<S.h4 className={`${className} headline`}>{children}</S.h4>);
    } else if (level === 5) {
        return (<S.h5 className={`${className} headline`}>{children}</S.h5>);
    }
    return (<S.h6 className={`${className} headline`}>{children}</S.h6>);
}
export default Headline;