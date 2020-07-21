import React from 'react';
import S from './inputLabel.style';

function InputLabel({ textColor, accentColor, name, focus, className}) {
  return (<S htmlFor={name} className={`${className ? className : ''} input__label ${focus ? 'focus' : ''}`} accentColor={accentColor} textColor={textColor}>{name}</S>);
}
export default InputLabel;