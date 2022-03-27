import dayjs from "dayjs";
import "dayjs/locale/ko";
import styled from "styled-components";
import { RANKING_LIST_TEXT, UPDATE_BY_DATE_TEXT } from "../../utils/constants";

const TodayTopDate = ({ slideState }) => {
  const date = dayjs().subtract(slideState, "day");
  dayjs.locale("ko");
  return (
    <DateTopDayContainer isToday={slideState === 0 ? true : false}>
      <h2>{date.format(`YYYY/M/DD/(ddd)`)}</h2>
      <aside>
        <div className="ranking-stories">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7917 5.45841C10.7917 7.55252 9.09411 9.25008 6.99997 9.25008C4.90586 9.25008 3.20825 7.55252 3.20825 5.45841C3.20825 3.36434 4.90586 1.66675 6.99997 1.66675C9.09411 1.66675 10.7917 3.36434 10.7917 5.45841Z"
              stroke="white"
              stroke-width="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.95825 8.66675V13.3334L7.18554 11.5834L9.04159 13.3334V8.66675"
              stroke="white"
              stroke-width="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>{RANKING_LIST_TEXT}</span>
        </div>
        <div className="update-everyday">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00004 13.3334C10.2217 13.3334 12.8333 10.7217 12.8333 7.50008C12.8333 4.27842 10.2217 1.66675 7.00004 1.66675C3.7784 1.66675 1.16675 4.27842 1.16675 7.50008C1.16675 10.7217 3.7784 13.3334 7.00004 13.3334Z"
              stroke="white"
              stroke-width="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 4V7.5L9.33333 9.83333"
              stroke="white"
              stroke-width="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>{UPDATE_BY_DATE_TEXT}</span>
        </div>
      </aside>
    </DateTopDayContainer>
  );
};

const DateTopDayContainer = styled.div`
  margin-top: 9px;
  margin-bottom: 10.54px;
  width: 100%;
  height: 60px;
  background-color: #232429;
  position: relative;
  > h2 {
    position: absolute;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    width: 132px;
    top: 10px;
    left: 0;
    right: 0;
    margin: 0px auto;
    color: ${(props) => (props.isToday ? "#96D9FF" : "#fff")};
  }
  > aside {
    margin: 39px 20px 0 20px;
    font-size: 10px;
    font-weight: 400;
    font-family: "Roboto";
    color: #fff;
    position: relative;
    > .ranking-stories {
      position: absolute;
      top: 3.5px;
      left: 0;
      display: flex;
      align-items: center;
    }
    > .update-everyday {
      position: absolute;
      top: 3.5px;
      right: 0;
      align-items: center;
      display: ${(props) => (props.isToday ? "flex" : "none")};
    }
  }
`;
export default TodayTopDate;
