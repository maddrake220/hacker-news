import {
  getStoriesIdsThunk,
  getStoriesThunk,
  getStoriesTrendingThunk,
} from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { PAGE_PER_VIEW, TYPE_SHOW } from "../utils/constants";
import ShowList from "../components/ShowList";
const ShowContainer = () => {
  const { data, pages, loading, trending } = useSelector(
    (state) => state.shows
  );
  console.log(trending);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoriesIdsThunk(TYPE_SHOW));
  }, [dispatch]);
  const getDataTrending = useCallback(() => {
    dispatch(getStoriesTrendingThunk(TYPE_SHOW, 0, 50));
  }, [dispatch]);
  const getData = useCallback(
    (currentPage) => {
      dispatch(
        getStoriesThunk(
          TYPE_SHOW,
          (currentPage - 1) * PAGE_PER_VIEW,
          (currentPage - 1) * PAGE_PER_VIEW + PAGE_PER_VIEW
        )
      );
    },
    [dispatch]
  );
  return (
    <ShowList
      loading={loading}
      pages={pages}
      list={data}
      getData={getData}
      getDataTrending={getDataTrending}
      trendingList={trending}
    />
  );
};

export default ShowContainer;
