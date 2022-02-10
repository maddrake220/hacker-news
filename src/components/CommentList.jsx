import styled from "styled-components";
import Comment from "./Comment";
import Loading from "./Loading";
import ReplyComment from "./ReplyComment";

const CommentList = ({ comments, loading }) => {
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
