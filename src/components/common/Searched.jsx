import styled from "styled-components";
import NewStory from "../Article/NewStory";

const Searched = ({ list }) => {
  return (
    <StyledSearched>
      <header>
        <h3>Searched</h3>
      </header>

      <div className="searched-list">
        {list?.map((story, index) => (
          <NewStory key={index} story={story} />
        ))}
      </div>
    </StyledSearched>
  );
};

const StyledSearched = styled.section`
  margin-top: 20px;
  position: relative;
  display: flex;
  align-items: center;

  > header {
    h3 {
      font-size: 0;
    }
  }
  .searched-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Searched;
