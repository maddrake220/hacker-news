import {
  GET_COMMENTS_FAIL,
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_STORY_FAIL,
  GET_STORY_START,
  GET_STORY_SUCCESS,
} from "../actions";

const initialState = {
  loading: false,
  data: [],
  comments: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === GET_STORY_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_STORY_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_STORY_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === GET_COMMENTS_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_COMMENTS_SUCCESS) {
    console.log(action);
    return {
      ...state,
      loading: false,
      comments: action.data,
    };
  }
  if (action.type === GET_COMMENTS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  return state;
}
