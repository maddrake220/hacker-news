import dayjs from "dayjs";
import "dayjs/locale/ko";
import styled from "styled-components";
import { RANKING_LIST_TEXT, UPDATE_BY_DATE_TEXT } from "../utils/constants";
import Badge_Icon from "../assets/Badge1.png";
import ClockTime_Icon from "../assets/ClockTime1.png";
const TodayTopDate = ({ slideState }) => {
  const date = dayjs().subtract(slideState, "day");
  dayjs.locale("ko");
  return (
    <DateTopDayContainer isToday={slideState === 0 ? true : false}>
      <h2>{date.format(`YYYY/M/DD/(ddd)`)}</h2>
      <aside>
        <div className="ranking-stories">
          <img src={Badge_Icon} alt="" />
          <span>{RANKING_LIST_TEXT}</span>
        </div>
        <div className="update-everyday">
          <img src={ClockTime_Icon} alt="" />
          <span>{UPDATE_BY_DATE_TEXT}</span>
        </div>
      </aside>
    </DateTopDayContainer>
  );
};

const DateTopDayContainer = styled.div`
  margin-top: 9px;
  margin-bottom: 10.54px;
  width: 390px;
  height: 57px;
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
    margin: 35px 20px 0 20px;
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
