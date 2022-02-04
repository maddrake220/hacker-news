import { useParams } from "react-router-dom";
import ItemContainer from "../containers/ItemContainer";

const Item = () => {
  const { id } = useParams();
  return <ItemContainer id={id} />;
};

export default Item;
