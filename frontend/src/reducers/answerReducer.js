import _ from 'lodash';
import { CREATE_ANSWER, FETCH_ANSWERS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case CREATE_ANSWER:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_ANSWERS:
			return {...state, ..._.mapKeys(action.payload, 'id')};
		default:
			return state;
	}
};
