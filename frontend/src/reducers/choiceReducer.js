import _ from 'lodash';
import { FETCH_CHOICES } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_CHOICES:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		default:
			return state;
	}
};
