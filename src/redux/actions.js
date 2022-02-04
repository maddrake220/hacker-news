import {
  getStories,
  getStoriesIds,
  getStory,
  getComments,
} from "../utils/apis";
import { TYPE_NEW, TYPE_TOP } from "../utils/constants";
import { sortStoriesByScore } from "../utils/sortStories";

export const GET_STORIES_START = "GET_STORIES_START";
export const GET_STORIES_SUCCESS = "GET_STORIES_SUCCESS";
export const GET_STORIES_FAIL = "GET_STORIES_FAIL";

export const GET_TOP_STORIES_START = "GET_TOP_STORIES_START";
export const GET_TOP_STORIES_SUCCESS = "GET_TOP_STORIES_SUCCESS";
export const GET_TOP_STORIES_FAIL = "GET_TOP_STORIES_FAIL";

export const GET_STORIES_IDS_START = "GET_STORIES_IDS_START";
export const GET_STORIES_IDS_SUCCESS = "GET_STORIES_IDS_SUCCESS";
export const GET_STORIES_IDS_FAIL = "GET_STORIES_IDS_FAIL";

export const GET_STORY_START = "GET_STORY_START";
export const GET_STORY_SUCCESS = "GET_STORY_SUCCESS";
export const GET_STORY_FAIL = "GET_STORY_FAIL";

export const GET_COMMENTS_START = "GET_COMMENTS_START";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAIL = "GET_COMMENTS_FAIL";

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

export function getTopStoriesStart() {
  return {
    type: GET_TOP_STORIES_START,
  };
}
export function getTopStoriesSuccess(data) {
  return {
    type: GET_TOP_STORIES_SUCCESS,
    data,
  };
}
export function getTopStoriesFail(error) {
  return {
    type: GET_TOP_STORIES_FAIL,
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

export function getStoryStart() {
  return {
    type: GET_STORY_START,
  };
}
export function getStorySuccess(data) {
  return {
    type: GET_STORY_SUCCESS,
    data,
  };
}
export function getStoryFail(error) {
  return {
    type: GET_STORY_FAIL,
    error,
  };
}

export function getCommentsStart() {
  return {
    type: GET_COMMENTS_START,
  };
}
export function getCommentsSuccess(data) {
  return {
    type: GET_COMMENTS_SUCCESS,
    data,
  };
}
export function getCommentsFail(error) {
  return {
    type: GET_COMMENTS_FAIL,
    error,
  };
}

export function getCommentsThunk(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getCommentsStart());
      let res = await getComments(id);
      dispatch(getCommentsSuccess(res));
    } catch (e) {
      dispatch(getCommentsFail(e));
    }
  };
}

export function getStoryThunk(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getStoryStart());
      let res = await getStory(id);
      dispatch(getStorySuccess(res));
    } catch (e) {
      dispatch(getStoryFail(e));
    }
  };
}
export function getStoriesThunk(type, start, end) {
  return async (dispatch, getState) => {
    switch (type) {
      case TYPE_TOP:
        try {
          dispatch(getTopStoriesStart());
          let res = await getStories(type, start, end);
          res = sortStoriesByScore(res).slice(0, 5);
          dispatch(getTopStoriesSuccess(res));
        } catch (e) {
          dispatch(getTopStoriesFail());
        }
        break;
      case TYPE_NEW:
        try {
          dispatch(getStoriesStart());
          let res = await getStories(type, start, end);
          dispatch(getStoriesSuccess(res));
        } catch (e) {
          dispatch(getStoriesFail());
        }

        break;
      default: {
      }
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
