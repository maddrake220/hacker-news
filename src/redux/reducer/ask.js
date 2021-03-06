import {
  GET_ASK_STORIES_FAIL,
  GET_ASK_STORIES_START,
  GET_ASK_STORIES_SUCCESS,
  GET_ASK_STORIES_TRENDING_FAIL,
  GET_ASK_STORIES_TRENDING_START,
  GET_ASK_STORIES_TRENDING_SUCCESS,
  GET_ASK_STORIES_IDS_FAIL,
  GET_ASK_STORIES_IDS_SUCCESS,
  GET_ASK_STORIES_IDS_START,
} from "../actions";

const initialState = {
  loading: false,
  data: [],
  trending: [],
  pages: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === GET_ASK_STORIES_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_ASK_STORIES_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_ASK_STORIES_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === GET_ASK_STORIES_TRENDING_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_ASK_STORIES_TRENDING_SUCCESS) {
    return {
      ...state,
      loading: false,
      trending: action.data,
    };
  }
  if (action.type === GET_ASK_STORIES_TRENDING_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === GET_ASK_STORIES_IDS_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_ASK_STORIES_IDS_SUCCESS) {
    return {
      ...state,
      loading: false,
      pages: action.data,
    };
  }
  if (action.type === GET_ASK_STORIES_IDS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  return state;
}
