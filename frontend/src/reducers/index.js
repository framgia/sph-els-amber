import { combineReducers } from 'redux';
import lessonReducer from './lessonReducer';
import questionReducer from './questionReducer';
import choiceReducer from './choiceReducer';
import answerReducer from './answerReducer';

export default combineReducers({
	lessons: lessonReducer,
	questions: questionReducer,
	choices: choiceReducer,
	answers: answerReducer,
});
