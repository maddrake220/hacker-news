import axios from "axios";
import { BASE_API_URL, PAGE_PER_VIEW } from "./constants";

// export const getStory = async (id) => {
//   try {
//     const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
//     return story;
//   } catch (error) {
//     console.log("Error while getting a story.");
//   }
// };

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log(error, "Error while getting a story.");
  }
};
// export const getStories = async (type) => {
//   try {
//     const { data: storyIds } = await axios.get(
//       `${BASE_API_URL}/${type}stories.json`,
//       {
//         params: {
//           limitToFirst: "30",
//           orderBy: `"$key"`,
//         },
//       }
//     );
//     return storyIds;
//   } catch (error) {
//     console.log("Error while getting list of stories.");
//   }
// };

export const getStories = async (type, start, end) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(start, end).map(getStory));
    return stories;
  } catch (error) {
    console.log(error, "Error while getting stories");
  }
};

export const getStoriesIds = async (type) => {
  try {
    const stories = await axios.get(`${BASE_API_URL}/${type}stories.json`);

    const pages = stories.data
      .filter((_, index) => index % 6 === 0)
      .map((_, index) => index + 1);
    return pages;
  } catch (error) {
    console.log(error, "Error while getting stories");
  }
};
