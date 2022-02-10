import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SearchedList from "../components/SearchedList";
import { getStoriesThunk } from "../redux/actions";
import { TYPE_ASK, TYPE_JOBS, TYPE_NEW, TYPE_SHOW } from "../utils/constants";

const SearchedContainer = ({ type, search }) => {
  const { loading, data } = useSelector((state) => {
    switch (type) {
      case TYPE_NEW:
        return state.news;
      case TYPE_ASK:
        return state.ask;
      case TYPE_SHOW:
        return state.shows;
      case TYPE_JOBS:
        return state.jobs;
      default:
        return state.news;
    }
  });
  const dispatch = useDispatch();
  const getData = useCallback(() => {
    dispatch(getStoriesThunk(type, 0, 50));
  }, [dispatch, type]);
  return (
    <SearchedList
      loading={loading}
      list={data}
      search={search}
      getData={getData}
    />
  );
};

export default SearchedContainer;
