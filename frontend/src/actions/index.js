import api from "../api";
import {
    FETCH_LESSON,
    FETCH_QUESTIONS,
    FETCH_CHOICES,
    CREATE_ANSWER,
    FETCH_ANSWERS,
    FETCH_CATEGORIES
} from "./types";

export const fetchCategories = () => async (dispatch) => {
    const response = await api.get(`/api/categories`);

    dispatch({type: FETCH_CATEGORIES, payload: response.data});
}

export const fetchLesson = (id) => async (dispatch) => {
    const response = await api.get(`/api/lessons/${id}/`);

    dispatch({type: FETCH_LESSON, payload: response.data});
}

export const fetchQuestions = (id) => async (dispatch) => {
    const response = await api.get(`/api/lessons/${id}/questions/`);

    dispatch({type: FETCH_QUESTIONS, payload: response.data});
}

export const fetchChoices = (lesson_id, question_id) => async (dispatch) => {
    const response = await api.get(`/api/lessons/${lesson_id}/questions/${question_id}/choices/`);

    dispatch({type: FETCH_CHOICES, payload: response.data});
}

export const createAnswer = (data) => async (dispatch) => {
    const response = await api.post(`/api/answers/`, data);

    dispatch({type: CREATE_ANSWER, payload: response.data});
}

export const fetchAnswers = (lesson_id, user_id) => async (dispatch) => {
    const response = await api.get(`/api/answers/?lesson=${lesson_id}&user=${user_id}`);

    dispatch({type: FETCH_ANSWERS, payload: response.data});
}
