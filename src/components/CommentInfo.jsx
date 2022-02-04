import { Link } from "react-router-dom";
import styled from "styled-components";
import COMMENT_ICON from "../assets/Main1stCommentIcon.png";
const CommentInfo = ({ id, descendants }) => {
  return (
    <StyledCommentInfo>
      <Link className={!id && `disabled-link`} to={`/item/${id}`}>
        <div className="comment-info">
          <img src={COMMENT_ICON} alt="comment"></img>
          <span>{descendants}</span>
        </div>
      </Link>
    </StyledCommentInfo>
  );
};

const StyledCommentInfo = styled.div`
  .comment-info {
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
      margin-left: 4px;
    }
  }
  .disabled-link {
    pointer-events: none;
  }
`;

export default CommentInfo;
