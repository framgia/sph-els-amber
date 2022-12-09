import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import lessonReducer from './lessonReducer';
import questionReducer from './questionReducer';
import choiceReducer from './choiceReducer';
import answerReducer from './answerReducer';

export default combineReducers({
	categories: categoryReducer,
	lessons: lessonReducer,
	questions: questionReducer,
	choices: choiceReducer,
	answers: answerReducer,
});
