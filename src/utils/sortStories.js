export const sortStoriesByScore = (stories) => {
  return stories.sort((a, b) => {
    return b.data.score - a.data.score;
  });
};
