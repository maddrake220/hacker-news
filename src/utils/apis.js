import axios from "axios";
import { BASE_API_URL } from "./constants";

export const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log(error, "Error while getting a story.");
  }
};
export const getComments = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    const comments = axios.all(story?.data?.kids?.map(getStory));
    return comments;
  } catch (error) {
    console.log(error, "Error while getting comments");
  }
};

export const getUser = async (id) => {
  try {
    const user = await axios.get(`${BASE_API_URL}/user/${id}.json`);
    return user;
  } catch (error) {}
};

export const getStoryTypeIds = async (type, start, end) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    return storyIds.slice(start, end);
  } catch (error) {
    console.log(error, "Error while getting stories");
  }
};

export const getStories = async (type, start, end) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await axios.all(storyIds.slice(start, end).map(getStory));
    return stories;
  } catch (error) {
    console.log(error, "Error while getting stories");
  }
};

export const getStoriesIds = async (type, pagePerView) => {
  try {
    const stories = await axios.get(`${BASE_API_URL}/${type}stories.json`);

    const pages = stories.data
      .filter((_, index) => index % pagePerView === 0)
      .map((_, index) => index + 1);
    return pages;
  } catch (error) {
    console.log(error, "Error while getting stories");
  }
};
