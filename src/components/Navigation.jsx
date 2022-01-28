import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="article">Article</Link>
      <Link to="ask">Ask</Link>
      <Link to="/">Home</Link>
      <Link to="show">Show</Link>
      <Link to="jobs">Jobs</Link>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  position: absolute;
  bottom: 0;
  width: 390px;
  height: 72px;
  background-color: #282828;
  color: #fff;
`;
export default Navigation;
