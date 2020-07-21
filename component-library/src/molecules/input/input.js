import React, { useState } from 'react';
import S from './input.styles';
import InputLabel from '../../atoms/inputLabel/inputLabel';
import InputField from '../../atoms/inputField/inputField';

function Input({ textColor, accentColor, getValue, name, id, className}) {
  const [isFocused, setisFocused] = useState(false);
  const [value, setvalue] = useState('');
  const on = {
    focus: () => {
      setisFocused(true);
    },
    blur: () => {
      if( value.length > 0) {
        getValue(value);
      } else {
        setisFocused(false);
      }
    },
    change: v => {
      setvalue(v);
    }
  }
  return (
    <S.container className={`${className ? className : ''} input ${isFocused ? 'focus' : ''}`} textColor={textColor} accentColor={accentColor}>
      <InputLabel name={name} focus={isFocused} textColor={textColor} accentColor={accentColor} />
      <InputField name={name} onFocus={on.focus} onBlur={on.blur} onChange={on.change} textColor={textColor} accentColor={accentColor} />
    </S.container>
  );
}
export default Input;