import dayjs from "dayjs";
import "dayjs/locale/ko";
import styled from "styled-components";
import { RANKING_LIST_TEXT, UPDATE_BY_DATE_TEXT } from "../utils/constants";
const TodayTopDate = () => {
  const now = dayjs();
  dayjs.locale("ko");
  return (
    <DateTopDayContainer>
      <h2>{now.format(`YYYY/M/DD/(ddd)`)}</h2>
      <aside>
        <span className="ranking-stories">{RANKING_LIST_TEXT}</span>
        <span className="update-everyday">{UPDATE_BY_DATE_TEXT}</span>
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
    margin: 34px 20px 0 20px;
    font-size: 10px;
    font-weight: 400;
    font-family: "roboto";
    color: #fff;
    position: relative;
    > .ranking-stories {
      position: absolute;
      top: 3.5px;
      left: 0;
    }
    > .update-everyday {
      position: absolute;
      top: 3.5px;
      right: 0;
      display: ${(props) => (props.isToday ? "block" : "none")};
    }
  }
`;
export default TodayTopDate;
