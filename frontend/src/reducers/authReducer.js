import {
	LOGIN,
	REGISTER,
	LOGOUT,
	LOGIN_ERROR,
	REGISTER_ERROR,
	LOGOUT_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
	token: null,
	user: null,
	email: null,
	id: null,
	error: {
		username: null,
		email: null,
		password: null,
	},
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REGISTER:
			return {
				token: action.payload.token,
				user: action.payload.username,
				email: action.payload.email,
				id: action.payload.id
			};
		case LOGIN:
			return {
				token: action.payload.token,
				user: action.payload.username,
				email: action.payload.email,
				id: action.payload.id
			};
		case LOGIN_ERROR:
			return {
				...state,
				error: action.payload
			};
		case REGISTER_ERROR:
			return {
				...state,
				error: action.payload
			};
		case LOGOUT:
			return INITIAL_STATE
		case LOGOUT_ERROR:
			return {
				...state,
				error: action.payload
			}
		default:
			return state;
	}
};
