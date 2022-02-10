import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchedContainer from "../containers/SearchedContainer";
import useSearch from "../hooks/useSearch";
import { TYPE_JOBS } from "../utils/constants";
import JobsRecent from "./JobsRecent";
import Pagination from "./Pagination";
import Search from "./Search";
import SearchButton from "./SearchButton";
import UserInfoButton from "./UserInfoButton";

const JobsList = ({ loading, pages, list, getData }) => {
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
        <StyledJobsList>
          <header>
            <h2>Jobs</h2>
            <div className="menu-bar">
              <SearchButton onClick={onOpenHandler} />
              <UserInfoButton />
            </div>
          </header>
          {prevSearch !== "" ? (
            <div className="search-result-text">
              <SearchedContainer type={TYPE_JOBS} search={prevSearch} />
            </div>
          ) : (
            <main>
              <JobsRecent loading={loading} list={list} />
              <Pagination
                currentPage={currentPage}
                pages={pages}
                paginate={paginate}
              />
            </main>
          )}
        </StyledJobsList>
      )}
    </>
  );
};

const StyledJobsList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
export default JobsList;
