import api, { non_auth_api } from '../api';
import {
	REGISTER,
	LOGIN,
	LOGOUT,
	LOGIN_ERROR,
	REGISTER_ERROR,
	LOGOUT_ERROR,
	FETCH_LESSON,
	FETCH_QUESTIONS,
	FETCH_CHOICES,
	CREATE_ANSWER,
	FETCH_ANSWERS,
	FETCH_CATEGORIES,
	FETCH_USER,
	FETCH_ACTIVITIES,
	CREATE_ACTIVITY,
	FETCH_LEARNED_LESSONS
} from './types';
import history from '../history';

export const register = (data) => async (dispatch) => {
	try {
		const response = await non_auth_api.post(`api/register/`, data);

		dispatch({ type: REGISTER, payload: response.data });
		history.push('/login');
	} catch (e) {
		let error = {
			username:
				!!e.response.data?.username?.length
					? e.response.data?.username[0]
					: null,
			email:
				!!e.response.data?.email?.length
					? e.response.data?.email[0]
					: null,
		};

		dispatch({ type: REGISTER_ERROR, payload: error });
	}
};

export const login = (data) => async (dispatch) => {
	try {
		const response = await non_auth_api.post(`api/login/`, data);

		sessionStorage.setItem("token", response.data.token);
		dispatch({ type: LOGIN, payload: response.data });
		history.push('/');
	} catch (e) {
		let error = {
			email: e.response.data?.email ?? null,
			password: e.response.data?.password ?? null,
		};

		dispatch({ type: LOGIN_ERROR, payload: error });
	}
};

export const logout = () => async (dispatch) => {
	try {
		const response = await api.post(`/api/logout/`, null);
        
		sessionStorage.removeItem("token");
		dispatch({ type: LOGOUT, payload: response.data });
		history.push('/login');
	} catch (e) {
		dispatch({ type: LOGOUT_ERROR, payload: e.response.data.detail })
	}
};

export const fetchCategories = () => async (dispatch) => {
	const response = await api.get(`/api/categories/`);

    dispatch({type: FETCH_CATEGORIES, payload: response.data});
}

export const fetchLesson = (id) => async (dispatch) => {
	const response = await api.get(`/api/lessons/${id}/`);

	dispatch({ type: FETCH_LESSON, payload: response.data });
};

export const fetchQuestions = (id) => async (dispatch) => {
	const response = await api.get(`/api/lessons/${id}/questions/`);

	dispatch({ type: FETCH_QUESTIONS, payload: response.data });
};

export const fetchChoices = (lesson_id, question_id) => async (dispatch) => {
	const response = await api.get(`/api/lessons/${lesson_id}/questions/${question_id}/choices/`);

	dispatch({ type: FETCH_CHOICES, payload: response.data });
};

export const createAnswer = (data) => async (dispatch) => {
	const response = await api.post(`/api/answers/`, data);

	dispatch({ type: CREATE_ANSWER, payload: response.data });
};

export const fetchAnswers = (lesson_id, user_id) => async (dispatch) => {
	let params = lesson_id ? { lesson: lesson_id, user: user_id } : { user: user_id }
	const response = await api.get(`api/answers/`, { params: params });

	dispatch({ type: FETCH_ANSWERS, payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const response = await api.get(`api/users/${id}`);

	dispatch({ type: FETCH_USER, payload: response.data });
}

export const fetchActivities = () => async (dispatch) => {
	const response = await api.get(`api/activity/`);

	dispatch({ type: FETCH_ACTIVITIES, payload: response.data });
}

export const createActivity = (data) => async (dispatch) => {
	const response = await api.post(`api/activity/`, data);

	dispatch({ type: CREATE_ACTIVITY, payload: response.data });
}

export const fetchLearnedLessons = (user_id) => async (dispatch) => {
	const response = await api.get(`api/activity/`, { params: { user: user_id }});

	dispatch({ type: FETCH_LEARNED_LESSONS, payload: response.data });
}
