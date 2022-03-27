import { useCallback } from "react";
import styled from "styled-components";
import { SearchHistory } from "../../utils/datas";
const Search = ({ onCloseHandler, search, setSearch, onSearchingHandler }) => {
  const onChangeHandler = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );
  const onKeyDownHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onSearchingHandler();
      }
    },
    [onSearchingHandler]
  );
  return (
    <StyledSearch>
      <svg
        className="button-close"
        onClick={onCloseHandler}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 21L21 1M21 21L1 1" stroke="#C4C4C4" stroke-opacity="0.52" />
      </svg>

      <div className="search-input-wrap">
        <svg
          className="backarrow-icon"
          onClick={() => setSearch("")}
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.07102 0.999977L0.999954 8.07104L8.07102 15.1421"
            stroke="white"
            stroke-opacity="0.87"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          onClick={onSearchingHandler}
          className="search-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.61339 2C11.0698 1.99997 12.4957 2.41752 13.7219 3.20312C14.948 3.98872 15.923 5.10939 16.5311 6.43216C17.1392 7.75494 17.3549 9.2243 17.1526 10.6659C16.9503 12.1075 16.3385 13.4609 15.3897 14.5654L22 21.1724L21.172 22L14.5605 15.3919C13.6281 16.1888 12.5168 16.7488 11.3212 17.024C10.1256 17.2991 8.88121 17.2814 7.69394 16.9724C6.50668 16.6633 5.41175 16.0719 4.5024 15.2488C3.59305 14.4256 2.89622 13.3949 2.47126 12.2446C2.0463 11.0942 1.90581 9.85826 2.06174 8.64194C2.21767 7.42562 2.66541 6.26498 3.36682 5.25889C4.06823 4.25279 5.00254 3.43103 6.09016 2.86361C7.17779 2.29619 8.38651 1.99991 9.61339 2ZM9.61339 3.17062C7.90497 3.17062 6.26652 3.84895 5.05849 5.05638C3.85045 6.26381 3.17179 7.90144 3.17179 9.60901C3.17179 11.3166 3.85045 12.9542 5.05849 14.1616C6.26652 15.3691 7.90497 16.0474 9.61339 16.0474C11.3218 16.0474 12.9603 15.3691 14.1683 14.1616C15.3763 12.9542 16.055 11.3166 16.055 9.60901C16.055 7.90144 15.3763 6.26381 14.1683 5.05638C12.9603 3.84895 11.3218 3.17062 9.61339 3.17062Z"
            fill="white"
            fill-opacity="0.87"
          />
        </svg>

        <input
          className="search-input"
          placeholder="Search"
          value={search}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
      <div className="search-recommend">
        {SearchHistory.map((v) => (
          <div className="recommend" onClick={() => setSearch(v.text)}>
            {v.text}
          </div>
        ))}
      </div>
      <div className="search-tip">
        <div className="search-wrap">
          <div className="search-icon">
            <i>i</i>
            <span>TIP</span>
          </div>
          <p>
            Show HN is for something you've made that other people can play
            with. HN users can try it out, give you feedback, and ask questions
            in the thread.
          </p>
        </div>
      </div>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard Variable"
  font-style: normal;
  color: rgba(255, 255, 255, 0.87);
  .button-close {
      position: absolute;
      top: 43px;
      right: 23px;
      cursor: pointer;
  }
  .search-recommend {
      margin-top: 20px;
      margin-left: 25px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      .recommend {
          cursor: pointer;
          font-weight: 300;
          font-size: 14px;
          line-height: 17px;
          border: 1px solid rgba(255, 255, 255, 0.87);
          border-radius: 10px;
          padding: 4px 15px;
      }
  }
  .search-input-wrap {
        margin-top: 92px;
        position: relative;
      .search-input {
            width: 310px;
            padding: 10px 0 10px 40px;
            background: #232429;
            border: none;
            border-radius: 4px;
            border-style: none;
            outline: none;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.87);
            font-size: 14px;
            line-height: 17px;
            letter-spacing: -0.02em;
      }
        .search-icon {
            cursor: pointer;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 12px;
            margin: auto 0;
        }
         .backarrow-icon {
            cursor: pointer;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 12px;
            margin: auto 0;
         }
  }
  .search-tip {
    margin-top: 27px;
    width: 350px;
    height: 148px;
    background: #232429;
    border-radius: 4px;
     .search-wrap {
      margin: 16px;
      p {
      margin-top: 8px;
      font-weight: 300;
      font-size: 16px;
      line-height: 22px;
    }
      .search-icon {
            display: flex;
            align-items: center;
            color: #96D9FF;
        > i {
            background: #96D9FF;
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: black;
        }
        > span {
            margin-left: 5px;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
        }
    }
  }
    
     
  }
`;
export default Search;
