import { Link, useLocation } from "react-router-dom";
import Article from "./Article";
import Ask from "./Ask";
import Jobs from "./Jobs";
import Show from "./Show";
import Top from "./Top";
import styled from "styled-components";
import LOGO from "../assets/LOGO.png";
import USER_AVATAR from "../assets/UserAccountProfile1.png";
import Navigation from "../components/Navigation";
const HackerNewsApp = () => {
  const { pathname } = useLocation();
  return (
    <StyledHackerNewsApp>
      <header>
        <img className="hackernews-logo" src={LOGO} alt="hackernewslogo"></img>
        <img className="useravatar" src={USER_AVATAR} alt="useravatar"></img>
      </header>
      <section>
        {pathname === "/" && <Top />}
        {pathname === "/article" && <Article />}
        {pathname === "/ask" && <Ask />}
        {pathname === "/jobs" && <Jobs />}
        {pathname === "/show" && <Show />}
      </section>
      <footer>
        <Navigation />
      </footer>
    </StyledHackerNewsApp>
  );
};

export default HackerNewsApp;

const StyledHackerNewsApp = styled.section`
  width: 396px;
  height: 956px;
  overflow: hidden;
  position: relative;
  background-color: #121212;

  > header {
    margin-top: 49px;
    padding-bottom: 38px;
    position: relative;
    .hackernews-logo {
      position: absolute;
      left: 20px;
    }
    .useravatar {
      position: absolute;
      right: 28.56px;
    }
  }
`;
