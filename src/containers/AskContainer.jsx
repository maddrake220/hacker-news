import AskList from "../components/Ask/AskList";
import {
  getStoriesIdsThunk,
  getStoriesThunk,
  getStoriesTrendingThunk,
} from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { PAGE_PER_VIEW, TYPE_ASK } from "../utils/constants";
const AskContainer = () => {
  const { data, error, pages, loading, trending } = useSelector(
    (state) => state.ask
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoriesIdsThunk(TYPE_ASK));
  }, [dispatch]);
  const getDataTrending = useCallback(() => {
    dispatch(getStoriesTrendingThunk(TYPE_ASK, 0, 50));
  }, [dispatch]);
  const getData = useCallback(
    (currentPage) => {
      dispatch(
        getStoriesThunk(
          TYPE_ASK,
          (currentPage - 1) * PAGE_PER_VIEW,
          (currentPage - 1) * PAGE_PER_VIEW + PAGE_PER_VIEW
        )
      );
    },
    [dispatch]
  );
  return (
    <AskList
      error={error}
      loading={loading}
      pages={pages}
      list={data}
      getData={getData}
      getDataTrending={getDataTrending}
      trendingList={trending}
    />
  );
};

export default AskContainer;
