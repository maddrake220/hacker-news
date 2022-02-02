export const sortStoriesByScore = (stories) => {
  console.log(stories);
  return stories.sort((a, b) => {
    return b.data.score - a.data.score;
  });
};
