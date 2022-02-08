import { combineReducers } from "redux";
import top from "./top";
import news from "./news";
import item from "./item";
import shows from "./shows";
import ask from "./ask";
import jobs from "./jobs";

const reducer = combineReducers({
  top,
  news,
  item,
  shows,
  ask,
  jobs,
});
export default reducer;
