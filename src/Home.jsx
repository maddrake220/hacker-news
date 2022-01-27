import React from "react";
import Story from "./components/Story";
import useDataFetcher from "./hooks/useDataFetcher";

const Home = (props) => {
  const { isLoading, stories } = useDataFetcher("top");

  return (
    <>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))}
        </>
      )}
    </>
  );
};

export default Home;
