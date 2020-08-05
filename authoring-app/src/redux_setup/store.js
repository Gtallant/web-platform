import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { initialState as initialAuth } from './../modules/login/dux/loginReducer';
import { initialState as initialPageList } from '../modules/pageList/dux/pageListReducer';

export default function configureStore(initialState={ auth: initialAuth, pageList: initialPageList}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}