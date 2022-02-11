import styled from "styled-components";
import Comment from "./Comment";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import ReplyComment from "./ReplyComment";

const CommentList = ({ comments, loading, error }) => {
  if (error !== null) return <ErrorMessage message={error} />;
  return (
    <StyledCommentList>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {comments &&
            comments.slice(0, 10).map((v) => (
              <div>
                <Comment comment={v.data} />
                <ReplyComment responseTo={v.data.id} dth={0} />
              </div>
            ))}
        </div>
      )}
    </StyledCommentList>
  );
};

const StyledCommentList = styled.div`
  margin-top: 27px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
`;
export default CommentList;
