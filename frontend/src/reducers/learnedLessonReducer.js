import _ from 'lodash';
import { FETCH_LEARNED_LESSONS } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_LEARNED_LESSONS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}
