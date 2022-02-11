import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { isSearch } from "../utils/search";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import Searched from "./Searched";

const SearchedList = ({ error, loading, list, search, getData }) => {
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    getData();
  }, [getData]);
  useEffect(() => {
    const filteredList = list.filter((value) =>
      isSearch(value.data.title, search)
    );
    setFilteredList(filteredList);
  }, [list, search]);
  if (error !== null) return <ErrorMessage message={error} />;
  return (
    <StyledSearchedList>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h4>
            Results for <span>'{search}'</span>
          </h4>
          <Searched list={filteredList} />
        </>
      )}
    </StyledSearchedList>
  );
};

const StyledSearchedList = styled.div`
  > h4 {
    margin-left: 20px;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    > span {
      font-weight: 500;
    }
  }
`;
export default SearchedList;
