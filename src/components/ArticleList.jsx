import { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import Recent from "./Recent";
import TrendingNow from "./TrendingNow";

const ArticleList = ({
  loading,
  pages,
  list,
  getData,
  getDataTrending,
  trendingList,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    getData(currentPage);
  }, [getData, currentPage]);

  useEffect(() => {
    getDataTrending();
  }, [getDataTrending]);
  return (
    <StyledArticleList>
      <header>
        <h2>Article</h2>
      </header>
      <main>
        <TrendingNow trendingList={trendingList} />
        <Recent loading={loading} list={list} />
        <Pagination
          currentPage={currentPage}
          pages={pages}
          paginate={paginate}
        />
      </main>
    </StyledArticleList>
  );
};

const StyledArticleList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  color: rgba(255, 255, 255, 0.87);
  font-family: "Pretendard Variable";
  font-style: normal;
  position: relative;
  > header {
    padding-top: 49px;
    padding-bottom: 38px;
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
