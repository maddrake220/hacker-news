import {
  getStories,
  getStoriesIds,
  getStory,
  getComments,
} from "../utils/apis";
import {
  PAGE_PER_VIEW,
  TYPE_ASK,
  TYPE_JOBS,
  TYPE_NEW,
  TYPE_SHOW,
  TYPE_TOP,
} from "../utils/constants";
import { groupStories, sortStoriesByScore } from "../utils/sortStories";

export const GET_STORIES_START = "GET_STORIES_START";
export const GET_STORIES_SUCCESS = "GET_STORIES_SUCCESS";
export const GET_STORIES_FAIL = "GET_STORIES_FAIL";

export const GET_STORIES_TRENDING_START = "GET_STORIES_TRENDING_START";
export const GET_STORIES_TRENDING_SUCCESS = "GET_STORIES_TRENDING_SUCCESS";
export const GET_STORIES_TRENDING_FAIL = "GET_STORIES_TRENDING_FAIL";

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

export const GET_SHOW_STORIES_FAIL = "GET_SHOW_STORIES_FAIL";
export const GET_SHOW_STORIES_START = "GET_SHOW_STORIES_START";
export const GET_SHOW_STORIES_SUCCESS = "GET_SHOW_STORIES_SUCCESS";
export const GET_SHOW_STORIES_TRENDING_FAIL = "GET_SHOW_STORIES_TRENDING_FAIL";
export const GET_SHOW_STORIES_TRENDING_START =
  "GET_SHOW_STORIES_TRENDING_START";
export const GET_SHOW_STORIES_TRENDING_SUCCESS =
  "GET_SHOW_STORIES_TRENDING_SUCCESS";
export const GET_SHOW_STORIES_IDS_FAIL = "GET_SHOW_STORIES_IDS_FAIL";
export const GET_SHOW_STORIES_IDS_SUCCESS = "GET_SHOW_STORIES_IDS_SUCCESS";
export const GET_SHOW_STORIES_IDS_START = "GET_SHOW_STORIES_IDS_START";

export const GET_ASK_STORIES_FAIL = "GET_ASK_STORIES_FAIL";
export const GET_ASK_STORIES_START = "GET_ASK_STORIES_START";
export const GET_ASK_STORIES_SUCCESS = "GET_ASK_STORIES_SUCCESS";
export const GET_ASK_STORIES_TRENDING_FAIL = "GET_ASK_STORIES_TRENDING_FAIL";
export const GET_ASK_STORIES_TRENDING_START = "GET_ASK_STORIES_TRENDING_START";
export const GET_ASK_STORIES_TRENDING_SUCCESS =
  "GET_ASK_STORIES_TRENDING_SUCCESS";
export const GET_ASK_STORIES_IDS_FAIL = "GET_ASK_STORIES_IDS_FAIL";
export const GET_ASK_STORIES_IDS_SUCCESS = "GET_ASK_STORIES_IDS_SUCCESS";
export const GET_ASK_STORIES_IDS_START = "GET_ASK_STORIES_IDS_START";

export const GET_JOBS_STORIES_FAIL = "GET_JOBS_STORIES_FAIL";
export const GET_JOBS_STORIES_START = "GET_JOBS_STORIES_START";
export const GET_JOBS_STORIES_SUCCESS = "GET_JOBS_STORIES_SUCCESS";
export const GET_JOBS_STORIES_IDS_FAIL = "GET_JOBS_STORIES_IDS_FAIL";
export const GET_JOBS_STORIES_IDS_SUCCESS = "GET_JOBS_STORIES_IDS_SUCCESS";
export const GET_JOBS_STORIES_IDS_START = "GET_JOBS_STORIES_IDS_START";

// news
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
export function getStoriesTrendingStart() {
  return {
    type: GET_STORIES_TRENDING_START,
  };
}
export function getStoriesTrendingSuccess(data) {
  return {
    type: GET_STORIES_TRENDING_SUCCESS,
    data,
  };
}
export function getStoriesTrendingFail(error) {
  return {
    type: GET_STORIES_TRENDING_FAIL,
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
// shows
export function getShowStoriesStart() {
  return {
    type: GET_SHOW_STORIES_START,
  };
}
export function getShowStoriesSuccess(data, trending) {
  return {
    type: GET_SHOW_STORIES_SUCCESS,
    data,
    trending,
  };
}
export function getShowStoriesFail(error) {
  return {
    type: GET_SHOW_STORIES_FAIL,
    error,
  };
}

export function getShowStoriesTrendingStart() {
  return {
    type: GET_SHOW_STORIES_TRENDING_START,
  };
}
export function getShowStoriesTrendingSuccess(data) {
  return {
    type: GET_SHOW_STORIES_TRENDING_SUCCESS,
    data,
  };
}
export function getShowStoriesTrendingFail(error) {
  return {
    type: GET_SHOW_STORIES_TRENDING_FAIL,
    error,
  };
}

export function getShowStoriesIdsStart() {
  return {
    type: GET_SHOW_STORIES_IDS_START,
  };
}
export function getShowStoriesIdsSuccess(data) {
  return {
    type: GET_SHOW_STORIES_IDS_SUCCESS,
    data,
  };
}
export function getShowStoriesIdsFail(error) {
  return {
    type: GET_SHOW_STORIES_IDS_FAIL,
    error,
  };
}

// jobs
export function getJobsStoriesStart() {
  return {
    type: GET_JOBS_STORIES_START,
  };
}
export function getJobsStoriesSuccess(data, trending) {
  return {
    type: GET_JOBS_STORIES_SUCCESS,
    data,
    trending,
  };
}
export function getJobsStoriesFail(error) {
  return {
    type: GET_JOBS_STORIES_FAIL,
    error,
  };
}

export function getJobsStoriesIdsStart() {
  return {
    type: GET_JOBS_STORIES_IDS_START,
  };
}
export function getJobsStoriesIdsSuccess(data) {
  return {
    type: GET_JOBS_STORIES_IDS_SUCCESS,
    data,
  };
}
export function getJobsStoriesIdsFail(error) {
  return {
    type: GET_JOBS_STORIES_IDS_FAIL,
    error,
  };
}
// ask
export function getAskStoriesStart() {
  return {
    type: GET_ASK_STORIES_START,
  };
}
export function getAskStoriesSuccess(data, trending) {
  return {
    type: GET_ASK_STORIES_SUCCESS,
    data,
    trending,
  };
}
export function getAskStoriesFail(error) {
  return {
    type: GET_ASK_STORIES_FAIL,
    error,
  };
}

export function getAskStoriesTrendingStart() {
  return {
    type: GET_ASK_STORIES_TRENDING_START,
  };
}
export function getAskStoriesTrendingSuccess(data) {
  return {
    type: GET_ASK_STORIES_TRENDING_SUCCESS,
    data,
  };
}
export function getAskStoriesTrendingFail(error) {
  return {
    type: GET_ASK_STORIES_TRENDING_FAIL,
    error,
  };
}

export function getAskStoriesIdsStart() {
  return {
    type: GET_ASK_STORIES_IDS_START,
  };
}
export function getAskStoriesIdsSuccess(data) {
  return {
    type: GET_ASK_STORIES_IDS_SUCCESS,
    data,
  };
}
export function getAskStoriesIdsFail(error) {
  return {
    type: GET_ASK_STORIES_IDS_FAIL,
    error,
  };
}
// top
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

export function getStoriesTrendingThunk(type, start, end) {
  return async (dispatch, getState) => {
    switch (type) {
      case TYPE_NEW:
        try {
          dispatch(getStoriesTrendingStart());
          let res = await getStories(type, start, end);

          res = sortStoriesByScore(res).slice(0, 5);

          dispatch(getStoriesTrendingSuccess(res));
        } catch (e) {
          dispatch(getStoriesTrendingFail());
        }
        break;
      case TYPE_SHOW:
        try {
          dispatch(getShowStoriesTrendingStart());
          let res = await getStories(type, start, end);

          res = sortStoriesByScore(res).slice(0, 5);

          dispatch(getShowStoriesTrendingSuccess(res));
        } catch (e) {
          dispatch(getShowStoriesTrendingFail());
        }
        break;
      case TYPE_ASK:
        try {
          dispatch(getAskStoriesTrendingStart());
          let res = await getStories(type, start, end);

          res = sortStoriesByScore(res).slice(0, 2);

          dispatch(getAskStoriesTrendingSuccess(res));
        } catch (e) {
          dispatch(getAskStoriesTrendingFail());
        }
        break;
      default: {
      }
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
          res = groupStories(res, "date");
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
      case TYPE_SHOW:
        try {
          dispatch(getShowStoriesStart());
          let res = await getStories(type, start, end);
          dispatch(getShowStoriesSuccess(res));
        } catch (e) {
          dispatch(getShowStoriesFail());
        }
        break;

      case TYPE_ASK:
        try {
          dispatch(getAskStoriesStart());
          let res = await getStories(type, start, end);
          dispatch(getAskStoriesSuccess(res));
        } catch (e) {
          dispatch(getAskStoriesFail());
        }
        break;
      case TYPE_JOBS:
        try {
          dispatch(getJobsStoriesStart());
          let res = await getStories(type, start, end);
          dispatch(getJobsStoriesSuccess(res));
        } catch (e) {
          dispatch(getJobsStoriesFail());
        }
        break;

      default: {
      }
    }
  };
}

export function getStoriesIdsThunk(type, pagePerView = PAGE_PER_VIEW) {
  return async (dispatch, getState) => {
    switch (type) {
      case TYPE_NEW:
        try {
          dispatch(getStoriesIdsStart());
          let res = await getStoriesIds(type, pagePerView);
          dispatch(getStoriesIdsSuccess(res));
        } catch (e) {
          dispatch(getStoriesIdsFail());
        }
        break;
      case TYPE_SHOW:
        try {
          dispatch(getShowStoriesIdsStart());
          let res = await getStoriesIds(type, pagePerView);
          dispatch(getShowStoriesIdsSuccess(res));
        } catch (e) {
          dispatch(getShowStoriesIdsFail());
        }
        break;
      case TYPE_ASK:
        try {
          dispatch(getAskStoriesIdsStart());
          let res = await getStoriesIds(type, pagePerView);
          dispatch(getAskStoriesIdsSuccess(res));
        } catch (e) {
          dispatch(getAskStoriesIdsFail());
        }
        break;
      case TYPE_JOBS:
        try {
          dispatch(getJobsStoriesIdsStart());
          let res = await getStoriesIds(type, pagePerView);
          dispatch(getJobsStoriesIdsSuccess(res));
        } catch (e) {
          dispatch(getJobsStoriesIdsFail());
        }
        break;
      default: {
      }
    }
  };
}
