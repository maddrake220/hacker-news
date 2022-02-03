import { getStoriesThunk } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import TopList from "../components/TopList";
import { TYPE_TOP } from "../utils/constants";
const TopContainer = () => {
  const { data, loading } = useSelector((state) => state.top);
  const dispatch = useDispatch();
  const getData = useCallback(() => {
    dispatch(getStoriesThunk(TYPE_TOP, 0, 30));
  }, [dispatch]);

  return <TopList loading={loading} list={data} getData={getData} />;
};

export default TopContainer;
