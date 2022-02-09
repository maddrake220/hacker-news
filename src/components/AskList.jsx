import { useEffect, useState } from "react";
import styled from "styled-components";
import useSearch from "../hooks/useSearch";
import AskRecent from "./AskRecent";
import AskTrending from "./AskTrending";
import Pagination from "./Pagination";
import Search from "./Search";
import SearchButton from "./SearchButton";
import UserInfoButton from "./UserInfoButton";

const AskList = ({
  loading,
  pages,
  list,
  getData,
  getDataTrending,
  trendingList,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearchOn, onOpenHandler, onCloseHandler] = useSearch();
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    getData(currentPage);
  }, [getData, currentPage]);

  useEffect(() => {
    getDataTrending();
  }, [getDataTrending]);
  return (
    <>
      {isSearchOn ? (
        <Search onCloseHandler={onCloseHandler} />
      ) : (
        <StyledAskList>
          <header>
            <h2>Ask</h2>
            <div className="menu-bar">
              <SearchButton onClick={onOpenHandler} />
              <UserInfoButton />
            </div>
          </header>
          <main>
            {trendingList.map((item) => (
              <AskTrending item={item} />
            ))}

            <AskRecent loading={loading} list={list} />
            <Pagination
              currentPage={currentPage}
              pages={pages}
              paginate={paginate}
            />
          </main>
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
  width: 395px;
  color: rgba(255, 255, 255, 0.87);
  font-family: "Pretendard Variable";
  font-style: normal;
  position: relative;
  .horizontal-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 46px;
    div {
      width: 350px;
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
      > * {
        margin-left: 19px;
      }
    }
  }
`;
export default AskList;
