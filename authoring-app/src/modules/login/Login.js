import React, { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Button, Input, Headline } from 'component-library';
import { attemptLogin } from './dux/loginActions';
import S from './Login.styles';

function Login() {
  const { error } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState('');
  const click = () => dispatch(attemptLogin({auth: inputVal}));

  return (
    <S>
      <Headline level={2}>Login</Headline>
      <Input name="Password" id="password-id" type="password" getValue={setInputVal} errorMsg={error} />
      <Button onClick={() => click()} level={2}>Test Redux</Button>
    </S>
  );
}

export default Login;
