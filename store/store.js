import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import * as authActions from './actions/auth';

const rootReducer = combineReducers({
	auth: authReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(authActions.checkLogin());
