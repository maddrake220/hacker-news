import { getStories } from "../utils/apis";
import { TYPE_TOP } from "../utils/constants";
import { sortStoriesByScore } from "../utils/sortStories";

export const GET_STORIES_START = "GET_STORIES_START";
export const GET_STORIES_SUCCESS = "GET_STORIES_SUCCESS";
export const GET_STORIES_FAIL = "GET_STORIES_FAIL";

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

export function getStoriesThunk(type) {
  return async (dispatch, getState) => {
    try {
      dispatch(getStoriesStart());
      let res = await getStories(type);
      if (type === TYPE_TOP) res = sortStoriesByScore(res);
      dispatch(getStoriesSuccess(res));
    } catch (e) {
      dispatch(getStoriesFail());
    }
  };
}
