import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemDetail from "../components/ItemDetail";
import { getStoryThunk } from "../redux/actions";

const ItemContainer = ({ id }) => {
  const { data, error, loading } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const getData = useCallback(() => {
    dispatch(getStoryThunk(id));
  }, [dispatch, id]);

  return (
    <ItemDetail
      errors={error}
      id={id}
      data={data}
      loading={loading}
      getData={getData}
    />
  );
};

export default ItemContainer;
