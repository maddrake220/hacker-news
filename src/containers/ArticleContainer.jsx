import ArticleList from "../components/ArticleList";
import { getStoriesIdsThunk, getStoriesThunk } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { TYPE_NEW } from "../utils/constants";
const ArticleContainer = () => {
  const { data, pages, loading } = useSelector((state) => state.top);
  const dispatch = useDispatch();
  const getData = useCallback(() => {
    dispatch(getStoriesIdsThunk(TYPE_NEW));
    dispatch(getStoriesThunk(TYPE_NEW));
  }, [dispatch]);
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
