import {
    FETCH_LESSON,
} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_LESSON:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}
