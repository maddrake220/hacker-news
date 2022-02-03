import ArticleList from "../components/ArticleList";
import { getStoriesIdsThunk, getStoriesThunk } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { PAGE_PER_VIEW, TYPE_NEW } from "../utils/constants";
const ArticleContainer = () => {
  const { data, pages, loading } = useSelector((state) => state.top);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoriesIdsThunk(TYPE_NEW));
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
      loading={loading}
      pages={pages}
      list={data}
      getData={getData}
    />
  );
};

export default ArticleContainer;
