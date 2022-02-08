import { useCallback, useState } from "react";
import styled from "styled-components";
import XIcon from "../assets/x-icon.png";
import { SearchHistory } from "../utils/datas";
import SearchIcon from "../assets/SearchIcon.png";
import ArrowIcon from "../assets/backarrow-icon.png";
const Search = ({ onCloseHandler }) => {
  const [search, setSearch] = useState("");
  const onChangeHandler = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  return (
    <StyledSearch>
      <img
        className="button-close"
        src={XIcon}
        alt=""
        onClick={onCloseHandler}
      />
      <div className="search-input-wrap">
        <img className="backarrow-icon" src={ArrowIcon} alt="" />
        <img className="search-icon" src={SearchIcon} alt="" />
        <input
          className="search-input"
          placeholder="Search"
          value={search}
          onChange={onChangeHandler}
        />
      </div>
      <div className="search-history">
        {SearchHistory.map((v) => (
          <div className="history">{v.text}</div>
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
  .search-history {
      margin-top: 20px;
      margin-left: 25px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      .history {
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
            position: absolute;
            top: 0;
            bottom: 0;
            right: 12px;
            margin: auto 0;
        }
         .backarrow-icon {
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
