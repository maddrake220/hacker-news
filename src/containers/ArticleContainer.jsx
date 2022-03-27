import ArticleList from "../components/Article/ArticleList";
import { getStoriesIdsThunk, getStoriesTrendingThunk } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { TYPE_NEW } from "../utils/constants";
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

  return (
    <ArticleList
      error={error}
      loading={loading}
      pages={pages}
      list={data}
      getDataTrending={getDataTrending}
      trendingList={trending}
    />
  );
};

export default ArticleContainer;
