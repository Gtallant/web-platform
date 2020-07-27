import React from 'react';
import { useDispatch  } from 'react-redux';
import { Card, Button } from 'component-library';
import { testAction } from './dux/loginActions';

function Login() {
  const dispatch = useDispatch();
  const click = () => {
    console.log('You clicked the login button');
    console.log(typeof testAction);
    dispatch(testAction("this is a payload"));
  }

  return (
    <Card>
      <Button onClick={() => click()} level={2}>Test Redux</Button>
    </Card>
  );
}

export default Login;
