import { combineReducers } from "redux";
import top from "./top";
import news from "./news";
import item from "./item";

const reducer = combineReducers({
  top,
  news,
  item,
});
export default reducer;
