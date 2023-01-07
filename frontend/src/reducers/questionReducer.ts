export const FETCH_QUESTIONS_ACTION = 'FETCH_QUESTIONS_ACTION';
export const IS_FETCHING_QUESTIONS_ACTION = 'IS_FETCHING_QUESTIONS_ACTION';

const initialState = {
  questions: {},
  isFetching: false,
};

const questionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_QUESTIONS_ACTION:
      return {
        ...state,
        list: action.payload.questions,
        isFetching: false,
      };
    case IS_FETCHING_QUESTIONS_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default questionReducer;
