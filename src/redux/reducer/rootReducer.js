import { combineReducers } from "redux";
import top from "./top";
import news from "./news";
import item from "./item";
import shows from "./shows";

const reducer = combineReducers({
  top,
  news,
  item,
  shows,
});
export default reducer;
