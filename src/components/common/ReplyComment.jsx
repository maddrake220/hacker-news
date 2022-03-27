import { GetCommentsFetcher } from "../../hooks/DataFetcher";
import Comment from "./Comment";

const ReplyComment = ({ responseTo, dth }) => {
  const [comments, isLoading] = GetCommentsFetcher(responseTo);
  return (
    <div className="reply-comment">
      {comments &&
        comments.map((v) => (
          <>
            <Comment isLoading={isLoading} comment={v.data} dth={dth + 1} />
            <ReplyComment responseTo={v.data.id} dth={dth + 1} />
          </>
        ))}
    </div>
  );
};

export default ReplyComment;
