import { useState, useEffect } from "react";
import { getStories } from "../utils/apis";
import { TYPETOP } from "../utils/constants";

// export const useDataFetcherItem = (storyId) => {
//   const [story, setStory] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     setIsLoading(true);
//     getStory(storyId)
//       .then((story) => {
//         setStory(story.data);
//         setIsLoading(false);
//       })
//       .catch(() => {
//         setIsLoading(false);
//       });
//   }, [storyId]);
//   return { isLoading, story };
// };
const sortStories = (stories) => {
  console.log(stories);
  return stories.sort((a, b) => {
    return b.data.score - a.data.score;
  });
};
export const useDataFetcher = (type) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then((stories) => {
        if (type === TYPETOP) stories = sortStories(stories);
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, stories };
};
