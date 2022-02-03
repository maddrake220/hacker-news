import {
  GET_TOP_STORIES_FAIL,
  GET_TOP_STORIES_START,
  GET_TOP_STORIES_SUCCESS,
} from "../actions";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === GET_TOP_STORIES_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_TOP_STORIES_SUCCESS) {
    console.log(action);
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_TOP_STORIES_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  return state;
}
