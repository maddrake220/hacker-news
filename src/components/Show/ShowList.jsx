import { useEffect, useState } from "react";
import styled from "styled-components";
import useSearch from "../../hooks/useSearch";
import Pagination from "../common/Pagination";
import AskRecent from "../Ask/AskRecent";
import SearchButton from "../common/SearchButton";
import UserInfoButton from "../common/UserInfoButton";
import Search from "../common/Search";
import SearchedContainer from "../../containers/SearchedContainer";
import { TYPE_SHOW } from "../../utils/constants";
import ErrorMessage from "../common/ErrorMessage";
import AskTrending from "../Ask/AskTrending";
const ShowList = ({
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
  if (error !== null) return <ErrorMessage message={error} />;
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
        <StyledShowList>
          <header>
            <h2>Show</h2>
            <div className="menu-bar">
              <SearchButton onClick={onOpenHandler} />
              <UserInfoButton />
            </div>
          </header>
          {prevSearch !== "" ? (
            <div className="search-result-text">
              <SearchedContainer type={TYPE_SHOW} search={prevSearch} />
            </div>
          ) : (
            <main>
              {trendingList.slice(0, 2).map((item) => (
                <AskTrending item={item} />
              ))}
              <div className="horizontal-bar">
                <div></div>
              </div>
              <AskRecent loading={loading} list={list} />
              <Pagination
                currentPage={currentPage}
                pages={pages}
                paginate={paginate}
              />
            </main>
          )}
        </StyledShowList>
      )}
    </>
  );
};

const StyledShowList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  font-family: "Pretendard Variable";
  font-style: normal;
  position: relative;
  .horizontal-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 46px;
    > div {
      width: 340px;
      border: 0.5px solid rgba(196, 196, 196, 0.52);
    }
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
      justify-content: center;
      > * {
        margin-left: 19px;
      }
    }
  }
`;
export default ShowList;
