import styled from "styled-components";
import Loading from "./Loading";
import AskStory from "./AskStory";
import Pagination from "./Pagination";

const AskRecent = ({ loading, list, currentPage, pages, paginate }) => {
  return (
    <StyledAskRecent>
      <header>
        <h3>Recent</h3>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {list?.map((story, index) => (
            <AskStory key={index} story={story} />
          ))}
        </div>
      )}
      <Pagination currentPage={currentPage} pages={pages} paginate={paginate} />
    </StyledAskRecent>
  );
};

const StyledAskRecent = styled.section`
  height: 50vh;
  position: relative;
  display: flex;
  align-items: center;

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
  > header {
    h3 {
      font-size: 0;
    }
  }
`;

export default AskRecent;
