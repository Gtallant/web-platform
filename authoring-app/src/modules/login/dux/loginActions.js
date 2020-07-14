import { TEST_ACTION } from './loginActionTypes';

export const testAction = () => dispatch => {
  dispatch({
   type: TEST_ACTION,
   payload: {
     auth: 'result_of_simple_action'}
  })
 }