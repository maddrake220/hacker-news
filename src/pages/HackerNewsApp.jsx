import { useLocation } from "react-router-dom";
import Article from "./Article";
import Ask from "./Ask";
import Jobs from "./Jobs";
import Show from "./Show";
import Top from "./Top";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Item from "./Item";
const HackerNewsApp = () => {
  const { pathname } = useLocation();
  return (
    <StyledHackerNewsApp>
      <header>
        <h1>HackerNews</h1>
      </header>
      <section>
        {pathname === "/" && <Top />}
        {pathname === "/article" && <Article />}
        {pathname === "/ask" && <Ask />}
        {pathname === "/jobs" && <Jobs />}
        {pathname === "/show" && <Show />}
        {pathname.slice(0, 5) === "/item" && <Item />}
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
  max-width: 412px;
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
