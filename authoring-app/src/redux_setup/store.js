import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { initialState as initialAuth } from './../modules/login/dux/loginReducer';

export default function configureStore(initialState={ auth: initialAuth}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}