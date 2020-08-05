import { LOGOUT, LOGIN } from './loginActionTypes';

export const initialState = {
  token: true,
  error: false,
}

export default (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        ...payload,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
 }