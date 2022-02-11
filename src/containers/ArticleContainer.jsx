import ArticleList from "../components/ArticleList";
import {
  getStoriesIdsThunk,
  getStoriesThunk,
  getStoriesTrendingThunk,
} from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { PAGE_PER_VIEW, TYPE_NEW } from "../utils/constants";
const ArticleContainer = () => {
  const { data, error, pages, loading, trending } = useSelector(
    (state) => state.news
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoriesIdsThunk(TYPE_NEW));
  }, [dispatch]);
  const getDataTrending = useCallback(() => {
    dispatch(getStoriesTrendingThunk(TYPE_NEW, 0, 50));
  }, [dispatch]);
  const getData = useCallback(
    (currentPage) => {
      dispatch(
        getStoriesThunk(
          TYPE_NEW,
          (currentPage - 1) * PAGE_PER_VIEW,
          (currentPage - 1) * PAGE_PER_VIEW + PAGE_PER_VIEW
        )
      );
    },
    [dispatch]
  );
  return (
    <ArticleList
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

export default ArticleContainer;
