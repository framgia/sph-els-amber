import _ from 'lodash';
import {
    FETCH_QUESTIONS,
} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_QUESTIONS:
            return {..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}
