import dayjs from "dayjs";

export const sortStoriesByScore = (stories) => {
  return stories.sort((a, b) => {
    return b.data.score - a.data.score;
  });
};

const storiesTimeTranslated = (stories) => {
  const newStories = stories.map((v) => {
    const date = dayjs(v.data.time * 1000).format(`YYYY/MM/DD`);
    return { ...v.data, date };
  });
  newStories.sort((a, b) => b.score - a.score);
  return newStories;
};

export const groupStories = (arrays, property) => {
  arrays = storiesTimeTranslated(arrays);
  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  const sorted = Object.entries(groupBy(arrays, property)).sort().reverse();
  return sorted;
};
