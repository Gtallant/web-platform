import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'component-library';
import { testAction } from './dux/loginActions';

function Login() {
  return (
    <Card>
      <Button onClick={() => testAction()} level={2}>Test Redux</Button>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction())
});

const mapStateToProps = state => {return {}};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
