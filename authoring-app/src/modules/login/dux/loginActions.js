import { TEST_ACTION, LOGIN } from './loginActionTypes';
import axios from 'axios';

export const testAction = payload => dispatch => {
  console.log(payload);
  dispatch({
   type: TEST_ACTION,
   payload: payload
  });
 }

export const attemptLogin = payload => dispatch => {
  const options = {
    method: 'post',
    url: `${process.env.REACT_APP_BACKEND}/login`,
    data: payload,
  }
  console.log(options);
  axios(options).then(res => {
    console.log(res);
    dispatch({
      type: LOGIN,
      payload: { token: res}
     });
  })
  .catch(err => {
    console.log(err);
    dispatch({
      type: LOGIN,
      payload: err.response.data
     });
  })
}