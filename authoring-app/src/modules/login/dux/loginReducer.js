import { TEST_ACTION, LOGIN } from './loginActionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case TEST_ACTION:
      console.log(action.payload);
      return {
        ...state,
      }
    case LOGIN:
      return {
        ...state,
        auth: {
          ...action.payload,
        }
      };
    default:
      return state;
  }
 }