import { GetStoryFetcher } from "../../hooks/DataFetcher";
import AStory from "./AStory";
import AStorySkeleton from "./AStorySkeleton";
const NewStory = ({ id }) => {
  const [story, isLoading] = GetStoryFetcher(id);

  return isLoading ? <AStorySkeleton /> : <AStory story={story} />;
};
export default NewStory;
