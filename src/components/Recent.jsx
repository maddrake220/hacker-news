import { useEffect } from "react";
import styled from "styled-components";
import NewStory from "./NewStory";

const Recent = ({ list, getData }) => {
  return (
    <StyledRecent>
      <div>
        {list?.map((story, index) => (
          <NewStory key={index} story={story} />
        ))}
      </div>
    </StyledRecent>
  );
};

const StyledRecent = styled.section`
  height: 494px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Recent;
