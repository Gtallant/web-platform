import { TEST_ACTION, LOGIN } from './loginActionTypes';

export const testAction = payload => dispatch => {
  console.log(payload);
  dispatch({
   type: TEST_ACTION,
   payload: {
     auth: 'result_of_simple_action'}
  })
 }

 export const loginAttempt = payload => dispatch => {
  dispatch({
   type: LOGIN,
   payload: payload
  });
 }