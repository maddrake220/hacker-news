import { getStories, getStoriesIds } from "../utils/apis";
import { TYPE_TOP } from "../utils/constants";
import { sortStoriesByScore } from "../utils/sortStories";

export const GET_STORIES_START = "GET_STORIES_START";
export const GET_STORIES_SUCCESS = "GET_STORIES_SUCCESS";
export const GET_STORIES_FAIL = "GET_STORIES_FAIL";
export const GET_STORIES_IDS_START = "GET_STORIES_IDS_START";
export const GET_STORIES_IDS_SUCCESS = "GET_STORIES_IDS_SUCCESS";
export const GET_STORIES_IDS_FAIL = "GET_STORIES_IDS_FAIL";
export function getStoriesStart() {
  return {
    type: GET_STORIES_START,
  };
}
export function getStoriesSuccess(data) {
  return {
    type: GET_STORIES_SUCCESS,
    data,
  };
}
export function getStoriesFail(error) {
  return {
    type: GET_STORIES_FAIL,
    error,
  };
}

export function getStoriesIdsStart() {
  return {
    type: GET_STORIES_IDS_START,
  };
}
export function getStoriesIdsSuccess(data) {
  return {
    type: GET_STORIES_IDS_SUCCESS,
    data,
  };
}
export function getStoriesIdsFail(error) {
  return {
    type: GET_STORIES_IDS_FAIL,
    error,
  };
}

export function getStoriesThunk(type, start, end) {
  return async (dispatch, getState) => {
    try {
      dispatch(getStoriesStart());
      let res = await getStories(type, start, end);
      if (type === TYPE_TOP) res = sortStoriesByScore(res).slice(0, 5);
      dispatch(getStoriesSuccess(res));
    } catch (e) {
      dispatch(getStoriesFail());
    }
  };
}

export function getStoriesIdsThunk(type) {
  return async (dispatch, getState) => {
    try {
      dispatch(getStoriesIdsStart());
      let res = await getStoriesIds(type);
      dispatch(getStoriesIdsSuccess(res));
    } catch (e) {
      dispatch(getStoriesIdsFail());
    }
  };
}
