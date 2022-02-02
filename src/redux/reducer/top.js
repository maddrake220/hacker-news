import {
  GET_STORIES_FAIL,
  GET_STORIES_START,
  GET_STORIES_SUCCESS,
  GET_STORIES_IDS_FAIL,
  GET_STORIES_IDS_SUCCESS,
  GET_STORIES_IDS_START,
} from "../actions";

const initialState = {
  loading: false,
  data: [],
  pages: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === GET_STORIES_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_STORIES_SUCCESS) {
    console.log(action);
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_STORIES_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === GET_STORIES_IDS_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_STORIES_IDS_SUCCESS) {
    console.log(action);
    return {
      ...state,
      loading: false,
      pages: action.data,
    };
  }
  if (action.type === GET_STORIES_IDS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  return state;
}
