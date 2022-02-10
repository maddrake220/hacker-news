import { Link } from "react-router-dom";
import styled from "styled-components";
const CommentInfo = ({ id, descendants, style }) => {
  return (
    <StyledCommentInfo>
      <Link className={!id && `disabled-link`} to={`/item/${id}`}>
        <div className="comment-info">
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10.5C8.7614 10.5 11 8.2614 11 5.5C11 2.73858 8.7614 0.5 6 0.5C3.23858 0.5 1 2.73858 1 5.5C1 6.8315 1.52047 8.04145 2.36906 8.9375L1.3634 10.0852C1.2218 10.2468 1.33657 10.5 1.55144 10.5H6Z"
              stroke="white"
              stroke-opacity="0.87"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.20837 4.33398H7.79171"
              stroke="white"
              stroke-opacity="0.87"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.20837 6.16724H5.04171"
              stroke="white"
              stroke-opacity="0.87"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span style={style}>{descendants}</span>
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
