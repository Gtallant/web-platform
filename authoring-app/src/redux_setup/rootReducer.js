import { combineReducers } from 'redux';
import auth from '../modules/login/dux/loginReducer';
import pageList from '../modules/pageList/dux/pageListReducer';

export default combineReducers({
  auth,
  pageList,
});