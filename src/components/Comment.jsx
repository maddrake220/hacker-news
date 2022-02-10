import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { substract } from "../utils/DateCalculation";
import TimeInfo from "./TimeInfo";
import UpDownIcon from "../assets/UpDownArrow.png";
import Loading from "./Loading";
import UserInfoModal from "./UserInfoModal";
const Comment = ({ isloading, comment, dth }) => {
  const textRef = useRef(null);
  const { by, text, time } = comment;
  const diff = substract(time);
  const [toggle, setToggle] = useState(false);
  const toggleHandler = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);
  useEffect(() => {
    textRef.current.innerHTML = text;
  }, [text]);
  return (
    <StyledComment toggle={toggle} dth={dth}>
      {isloading ? (
        <Loading />
      ) : (
        <div className="comment-wrap">
          <div className="comment-info">
            <div className="comment-user">
              <UserInfoModal by={by} isIcon={false} />
            </div>
            <div className="comment-side">
              <div className="comment-time">
                <TimeInfo diff={diff} />
              </div>
              <img
                className={`toggle-arrow ${toggle && "toggled"}`}
                src={UpDownIcon}
                alt=""
                onClick={toggleHandler}
              />
            </div>
          </div>
          <div
            className={`comment-text ${toggle && "toggled"}`}
            ref={textRef}
          ></div>
        </div>
      )}
    </StyledComment>
  );
};

export default Comment;

const StyledComment = styled.article`
  background: ${(props) =>
    props.dth ? (props.dth % 2 === 0 ? "#282828" : "#363636") : "#282828"};
  box-shadow: 0px -1px 0px rgba(255, 255, 255, 0.15);
  font-family: "Roboto";
  font-weight: normal;
  font-style: normal;
  display: flex;
  padding-bottom: 16px;
  + .reply-comment {
    display: ${(props) => props.toggle && "none"};
  }
  p {
    margin-top: 12px;
  }
  pre {
    code {
      display: block;
    }
  }
  .comment-wrap {
    margin-left: ${(props) => (props.dth ? props.dth * 16 + 30 : 30)}px;
    margin-top: 19px;
    margin-right: 20px;
    width: 100%;
    .comment-info {
      position: relative;
      display: flex;
      .comment-user {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #96d9ff;
        font-family: "Pretendard Variable";
      }
      .comment-side {
        position: absolute;
        right: 25px;
        display: flex;
        align-items: center;
        .comment-time {
          font-size: 10px;
          line-height: 12px;
          color: #c0c4c7;
        }
        .toggle-arrow {
          margin-left: 8px;
          &.toggled {
            transform: rotate(180deg);
          }
        }
      }
    }
    .comment-text {
      max-width: 350px;
      margin-top: 12px;
      font-size: 12px;
      line-height: 14px;
      color: #ffffff;
      &.toggled {
        display: none;
      }
    }
  }
`;
