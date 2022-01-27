import { Link, useLocation } from "react-router-dom";
import Article from "./Article";
import Ask from "./Ask";
import Jobs from "./Jobs";
import Show from "./Show";
import Top from "./Top";
import styled from "styled-components";
const HackerNewsApp = () => {
  const { pathname } = useLocation();
  return (
    <StyledHackerNewsApp>
      <header></header>
      <section>
        {pathname === "/" && <Top />}
        {pathname === "/article" && <Article />}
        {pathname === "/ask" && <Ask />}
        {pathname === "/jobs" && <Jobs />}
        {pathname === "/show" && <Show />}
      </section>
      <footer>
        <nav>
          <Link to="article">Article</Link>
          <Link to="ask">Ask</Link>
          <Link to="/">Home</Link>
          <Link to="show">Show</Link>
          <Link to="jobs">Jobs</Link>
        </nav>
      </footer>
    </StyledHackerNewsApp>
  );
};

export default HackerNewsApp;

const StyledHackerNewsApp = styled.section`
  width: 390px;
  height: 956px;
  overflow: hidden;
  position: relative;
  background-color: #121212;
`;
