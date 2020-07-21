import React from 'react';
import S from './inputField.style';

function InputField({ textColor, accentColor, name, id, type, onFocus, onBlur, onChange, className}) {
  if (id) {
    return (<S
      id={id}
      name={name}
      onChange={e => onChange(e.target.value)}
      onFocus={() => onFocus()}
      onBlur={() => onBlur()}
      type={type ? type : ''}  
      className={`${className} input__field`}
      color={textColor} accent={accentColor}
    />);
  }
  return (<S
    name={name}
    onChange={e => onChange(e.target.value)}
    onFocus={() => onFocus()}
    onBlur={() => onBlur()}
    type={type ? type : ''}  
    className={`${className} input__field`}
    color={textColor} accent={accentColor}
  />);
}
export default InputField;