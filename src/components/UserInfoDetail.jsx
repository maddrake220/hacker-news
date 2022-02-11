import styled from "styled-components";
import { GetUserFetcher } from "../hooks/DataFetcher";
import { TYPE_USER } from "../utils/constants";
import { substract } from "../utils/DateCalculation";
import ErrorMessage from "./ErrorMessage";
const UserInfoDetail = ({ by, closeModal }) => {
  const [user, isLoading, error] = GetUserFetcher(by);
  if (error !== null) return <ErrorMessage message={error} />;
  return (
    <StyledUserInfoDetail>
      {isLoading ? (
        <></>
      ) : (
        <>
          <header>
            <h4>User Information</h4>
            <svg
              className="close-button"
              onClick={closeModal}
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 21L21 1M21 21L1 1"
                stroke="#C4C4C4"
                stroke-opacity="0.52"
              />
            </svg>
          </header>
          <div className="user-icon">
            <span>USER</span>
          </div>
          <h5>{user?.data?.id}</h5>
          <span className="user-created">
            {substract(user?.data?.created, TYPE_USER)}
          </span>
          <div className="user-karma">
            <div>
              <span>P</span>
            </div>
            <span>{user?.data?.karma}</span>
          </div>
          <div className="user-links">
            <button>articles</button>
            <button>comments</button>
            <button>favorite</button>
          </div>
          <div className="user-description">
            <p>React, Front-end</p>
          </div>
        </>
      )}
    </StyledUserInfoDetail>
  );
};

export default UserInfoDetail;

const StyledUserInfoDetail = styled.div`
  margin-left: 55px;
  margin-top: 131px;
  color: rgba(255, 255, 255, 0.87);

  letter-spacing: -0.02em;
  > header {
    > h4 {
      position: absolute;
      left: 20px;
      top: 40px;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: rgba(196, 196, 196, 0.52);
    }
    > .close-button {
      cursor: pointer;
      width: 20px;
      height: 21px;
      position: absolute;
      right: 20px;
      top: 42px;
    }
  }
  > .user-icon {
    width: 40px;
    height: 16px;
    background: #96d9ff;
    border-radius: 2px;
    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      line-height: 19px;
      font-weight: 700;
      color: #121212;
    }
  }
  > h5 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #03c1ff;
  }
  > .user-created {
    display: block;
    margin-top: 46px;
    font-size: 16px;
    line-height: 19px;
  }
  .user-karma {
    margin-top: 7px;
    display: flex;
    align-items: center;

    > div {
      width: 15px;
      height: 15px;
      border: 1px solid #fff;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 3px;
    }
    > span {
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
    }
  }
  .user-links {
    margin-top: 24px;
  }
  button {
    cursor: pointer;
    width: 80px;
    height: 28px;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #fff;
    background-color: transparent;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    margin-right: 8px;
    &:hover {
      color: #121212;
      background-color: rgba(255, 255, 255, 0.87);
    }
  }
  .user-description {
    margin-top: 60px;
    width: 255px;
    border: 1px solid gray;
    > p {
      padding: 8px 8px 20px 8px;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;

      color: rgba(255, 255, 255, 0.57);
    }
  }
`;
