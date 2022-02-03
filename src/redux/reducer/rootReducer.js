import { combineReducers } from "redux";
import top from "./top";
import news from "./news";

const reducer = combineReducers({
  top,
  news,
});
export default reducer;
