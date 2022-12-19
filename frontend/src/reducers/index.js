import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import lessonReducer from './lessonReducer';
import questionReducer from './questionReducer';
import choiceReducer from './choiceReducer';
import answerReducer from './answerReducer';
import activityReducer from './activityReducer';
import learnedLessonReducer from './learnedLessonReducer';
import { LOGOUT } from '../actions/types';
import storageSession from 'redux-persist/lib/storage/session';

const appReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	categories: categoryReducer,
	lessons: lessonReducer,
	questions: questionReducer,
	choices: choiceReducer,
	answers: answerReducer,
	activities: activityReducer,
	learnedLessons: learnedLessonReducer,
});

export default (state, action) => {
	if(action.type === LOGOUT){
		state = undefined;
		storageSession.removeItem('persist:root');
	}

	return appReducer(state, action);
}
