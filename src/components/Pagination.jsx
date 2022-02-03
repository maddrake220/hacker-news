import styled from "styled-components";
import Arrow_Icon from "../assets/VectorArrow.png";
const Pagination = ({ currentPage, pages, paginate }) => {
  return (
    <StyledPagination>
      {pages &&
        pages.slice(0, 5).map((number) => (
          <span
            className={`page-link ${currentPage === number && `active`}`}
            onClick={() => {
              paginate(number);
            }}
          >
            {number}
          </span>
        ))}
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
  > .page-link {
    cursor: pointer;
    &.active {
      color: #96d9ff;
    }
  }
`;
export default Pagination;
