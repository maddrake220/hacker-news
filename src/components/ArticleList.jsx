import { useEffect } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import Pagination from "./Pagination";
import Recent from "./Recent";
import TrendingNow from "./TrendingNow";

const ArticleList = ({ loading, pages, list, getData, getPages }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  useEffect(() => {
    getPages();
  }, [getPages]);

  return (
    <StyledArticleList>
      <header>
        <h2>Article</h2>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <>
          <main>
            <TrendingNow />
            <Recent list={list} />
          </main>
          <footer>
            <Pagination pages={pages} />
          </footer>
        </>
      )}
    </StyledArticleList>
  );
};

const StyledArticleList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  font-family: "Pretendard Variable";
  font-style: normal;
  position: relative;
  > header {
    > h2 {
      position: absolute;
      top: 40px;
      left: 20px;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: -0.02em;
      color: rgba(196, 196, 196, 0.52);
    }
  }
`;
export default ArticleList;
