import styled from "styled-components";

const TrendingNow = () => {
  return (
    <StyledTrendingNow>
      <h3>Trending Now</h3>
    </StyledTrendingNow>
  );
};

export default TrendingNow;

const StyledTrendingNow = styled.section`
  margin-top: 11px;
  width: 350px;
  height: 250px;
  > h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }
`;
