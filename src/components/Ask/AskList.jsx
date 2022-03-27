import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchedContainer from "../../containers/SearchedContainer";
import useSearch from "../../hooks/useSearch";
import { TYPE_ASK } from "../../utils/constants";
import AskRecent from "./AskRecent";
import AskTrending from "./AskTrending";
import ErrorMessage from "../common/ErrorMessage";
import Search from "../common/Search";
import SearchButton from "../common/SearchButton";
import UserInfoButton from "../common/UserInfoButton";

const AskList = ({
  error,
  loading,
  pages,
  list,
  getData,
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
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    getData(currentPage);
  }, [getData, currentPage]);

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
        <StyledAskList>
          <header>
            <h2>Ask</h2>
            <div className="menu-bar">
              <SearchButton onClick={onOpenHandler} />
              <UserInfoButton />
            </div>
          </header>
          {prevSearch !== "" ? (
            <div className="search-result-text">
              <SearchedContainer type={TYPE_ASK} search={prevSearch} />
            </div>
          ) : (
            <main>
              <div className="ask-trending">
                {trendingList.map((item) => (
                  <AskTrending item={item} />
                ))}
              </div>

              <AskRecent
                loading={loading}
                list={list}
                pages={pages}
                paginate={paginate}
                currentPage={currentPage}
              />
            </main>
          )}
        </StyledAskList>
      )}
    </>
  );
};

const StyledAskList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  font-family: "Pretendard Variable";
  font-style: normal;
  position: relative;
  margin: 0 20px 0 20px;
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
export default AskList;
