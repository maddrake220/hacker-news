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
        <div className="ask-list">
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
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  > header {
    h3 {
      font-size: 0;
    }
  }
  .ask-list {
    margin-top: 24px;
  }
`;

export default AskRecent;
