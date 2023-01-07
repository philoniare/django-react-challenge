import { Question } from 'models/question';

import { FETCH_QUESTIONS_ACTION, IS_FETCHING_QUESTIONS_ACTION } from 'reducers/questionReducer';
import questionApi from 'apis/questionApi';

export const fetchQuestions = () => {
  return async (dispatch: any) => {
    dispatch({ type: IS_FETCHING_QUESTIONS_ACTION });

    const response = await questionApi.getAll();
    const questions = response.questions.map((data) => new Question(data));

    dispatch({
      type: FETCH_QUESTIONS_ACTION,
      payload: {
        questions,
      },
    });
  };
};
