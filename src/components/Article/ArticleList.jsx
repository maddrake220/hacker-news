import { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../common/Pagination";
import Recent from "../common/Recent";
import SearchButton from "../common/SearchButton";
import Search from "../common/Search";
import TrendingNow from "../common/TrendingNow";
import UserInfoButton from "../common/UserInfoButton";
import useSearch from "../../hooks/useSearch";
import SearchedContainer from "../../containers/SearchedContainer";
import { PAGE_PER_VIEW, TYPE_NEW } from "../../utils/constants";
import ErrorMessage from "../common/ErrorMessage";
import { GetStoriesFetcher } from "../../hooks/DataFetcher";

const ArticleList = ({
  error,
  loading,
  pages,
  getDataTrending,
  trendingList,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [
    search,
    prevSearch,
    setSearch,
    isSearchOn,
    onOpenHandler,
    onCloseHandler,
    onSearchingHandler,
  ] = useSearch();
  const [stories, isLoading] = GetStoriesFetcher(
    TYPE_NEW,
    (currentPage - 1) * PAGE_PER_VIEW,
    (currentPage - 1) * PAGE_PER_VIEW + PAGE_PER_VIEW
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getDataTrending();
  }, [getDataTrending]);
  if (error !== null) {
    return <ErrorMessage message={error} />;
  }
  return (
    <>
      {isSearchOn ? (
        <Search
          onCloseHandler={onCloseHandler}
          search={search}
          setSearch={setSearch}
          onSearchingHandler={onSearchingHandler}
        />
      ) : (
        <StyledArticleList>
          <header>
            <h2>Article</h2>
            <div className="menu-bar">
              <SearchButton onClick={onOpenHandler} />
              <UserInfoButton />
            </div>
          </header>
          {prevSearch !== "" ? (
            <div className="search-result-text">
              <SearchedContainer type={TYPE_NEW} search={prevSearch} />
            </div>
          ) : (
            <main>
              <TrendingNow loading={loading} trendingList={trendingList} />
              <div className="horizontal-bar"></div>
              <Recent loading={isLoading} ids={stories} />
              <Pagination
                currentPage={currentPage}
                pages={pages}
                paginate={paginate}
              />
            </main>
          )}
        </StyledArticleList>
      )}
    </>
  );
};

const StyledArticleList = styled.section`
  color: rgba(255, 255, 255, 0.87);
  font-family: "Pretendard Variable";
  font-style: normal;
  position: relative;
  .horizontal-bar {
    position: absolute;
    border: 0.5px solid rgba(196, 196, 196, 0.52);
  }
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
    > .menu-bar {
      position: absolute;
      right: 19px;
      top: 43px;
      display: flex;
      > * {
        margin-left: 19px;
      }
    }
  }
`;
export default ArticleList;
