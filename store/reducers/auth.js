import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
	loading: false,
	authData: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return updateObject(state, { loading: true });
		case actionTypes.AUTH_FAIL:
			return updateObject(state, { loading: false });
		case actionTypes.AUTH_SUCCESS:
			return updateObject(state, {
				loading: false,
				isAuthenticated: true,
				authData: action.authData
			});
		case actionTypes.AUTH_LOGOUT:
			return updateObject(state, { isAuthenticated: false, authData: {} });
		default:
			return state;
	}
};

export default reducer;
