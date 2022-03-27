import { useLocation } from "react-router-dom";
import Article from "./Article";
import Ask from "./Ask";
import Jobs from "./Jobs";
import Show from "./Show";
import Top from "./Top";
import styled from "styled-components";
import Navigation from "../components/common/Navigation";
import Item from "./Item";
import NotFound from "./NotFound";
const HackerNewsApp = () => {
  const { pathname } = useLocation();
  return (
    <StyledHackerNewsApp>
      <header>
        <h1>HackerNews</h1>
      </header>
      <section>
        {pathname === "/" ? (
          <Top />
        ) : pathname === "/article" ? (
          <Article />
        ) : pathname === "/ask" ? (
          <Ask />
        ) : pathname === "/jobs" ? (
          <Jobs />
        ) : pathname === "/show" ? (
          <Show />
        ) : pathname.slice(0, 5) === "/item" ? (
          <Item />
        ) : (
          <NotFound />
        )}
      </section>
      <footer>
        <Navigation />
      </footer>
    </StyledHackerNewsApp>
  );
};

export default HackerNewsApp;

const StyledHackerNewsApp = styled.section`
  width: 100vw;

  @media screen and (max-width: 599px) {
    /* 모바일 세로 */
  }

  @media screen and (max-width: 899px) {
    /* 모바일 가로, 타블렛 세로 */
  }

  @media screen and (max-width: 1199px) {
    /* 타블렛 가로 */
  }
  @media screen and (max-width: 1799px) {
    /* 데스크탑 */
  }

  min-height: 100vh;
  position: relative;
  background-color: #121212;
  > section {
    padding-bottom: 10vh;
  }
  > header {
    > h1 {
      font-size: 0;
    }
  }
`;
