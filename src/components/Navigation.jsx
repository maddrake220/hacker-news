import { Link } from "react-router-dom";
import styled from "styled-components";
import Article_Icon from "../assets/article_icon.png";
import Ask_Icon from "../assets/ask_icon.png";
import Home_Icon from "../assets/home_icon.png";
import Jobs_Icon from "../assets/jobs_icon.png";
import Show_Icon from "../assets/show_icon.png";
const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="article">
        <img src={Article_Icon} alt="" />
        <span>article</span>
      </Link>
      <Link to="ask">
        <img src={Ask_Icon} alt="" />
        <span>ask</span>
      </Link>
      <Link to="/">
        <img src={Home_Icon} alt="" />
        <span>home</span>
      </Link>
      <Link to="show">
        <img src={Show_Icon} alt="" />
        <span>show</span>
      </Link>
      <Link to="jobs">
        <img src={Jobs_Icon} alt="" />
        <span>jobs</span>
      </Link>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  position: fixed;
  bottom: 0;
  width: 396px;
  height: 72px;
  background-color: #282828;
  color: #fff;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-family: "Pretendard Variable";
  font-size: 8px;
  line-height: 9.6px;
  flex-grow: 1;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  > * {
    width: 56px;
    height: 56px;
    margin-right: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :nth-child(1) {
      margin-left: 20px;
    }
    :nth-child(2) {
      margin-right: 116px;
    }
    :nth-child(3) {
      width: 80px;
      height: 80px;
      background-color: #363636;
      border-radius: 50%;
      position: absolute;
      bottom: 8.45px;
      left: 0;
      right: 0;
      margin: 0 auto;
      box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
export default Navigation;
