import { GetStoryFetcher } from "../../hooks/DataFetcher";
import AStory from "./AStory";
import AStorySkeleton from "./AStorySkeleton";
import Loading from "../common/Loading";
const NewStory = ({ id }) => {
  const [story, isLoading, isError] = GetStoryFetcher(id);

  return isLoading ? <AStorySkeleton /> : <AStory story={story} />;
};
export default NewStory;
