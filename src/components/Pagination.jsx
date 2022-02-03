import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Arrow_Icon from "../assets/VectorArrow.png";
const Pagination = ({ pages, getPages }) => {
  return (
    <StyledPagination>
      {pages &&
        pages
          .slice(0, 5)
          .map((v) => <NavLink to={`/article/${v}`}>{v}</NavLink>)}
      <img src={Arrow_Icon} alt="" />
    </StyledPagination>
  );
};

const StyledPagination = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  margin-top: 10px;

  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  > * {
    margin-right: 24px;
  }
`;
export default Pagination;
