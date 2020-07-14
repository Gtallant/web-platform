import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
export default function configureStore(initialState={ auth: false}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}