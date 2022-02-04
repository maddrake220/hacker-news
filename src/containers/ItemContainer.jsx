import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemDetail from "../components/ItemDetail";
import { getCommentsThunk, getStoryThunk } from "../redux/actions";

const ItemContainer = ({ id }) => {
  const { data, comments, loading } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  console.log(comments);
  const getData = useCallback(() => {
    dispatch(getStoryThunk(id));
  }, [dispatch, id]);

  const getComments = useCallback(() => {
    dispatch(getCommentsThunk(id));
  }, [dispatch, id]);

  return (
    <ItemDetail
      data={data}
      comments={comments}
      loading={loading}
      getData={getData}
      getComments={getComments}
    />
  );
};

export default ItemContainer;
