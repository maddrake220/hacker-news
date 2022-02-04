import styled from "styled-components";
import Comment from "./Comment";
import Loading from "./Loading";

const CommentList = ({ comments, loading }) => {
  return (
    <StyledComments>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {comments && comments.map((v) => <Comment comment={v.data} />)}
        </div>
      )}
    </StyledComments>
  );
};

const StyledComments = styled.div`
  color: #fff;
`;
export default CommentList;
