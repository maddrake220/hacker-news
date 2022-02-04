import { useRef } from "react";
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
              <>
                <Comment comment={v.data} />
                <ReplyComment responseTo={v.data.id} dth={0} />
              </>
            ))}
        </div>
      )}
    </StyledCommentList>
  );
};

const StyledCommentList = styled.div`
  margin-top: 27px;
  height: 600px;
  position: relative;
  display: flex;
  align-items: center;

  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
  color: #fff;
`;
export default CommentList;
