import styled from "styled-components";
const SearchInput = () => {
  return (
    <InputContainer>
      <svg
        className="search-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.61339 2C11.0698 1.99997 12.4957 2.41752 13.7219 3.20312C14.948 3.98872 15.923 5.10939 16.5311 6.43216C17.1392 7.75494 17.3549 9.2243 17.1526 10.6659C16.9503 12.1075 16.3385 13.4609 15.3897 14.5654L22 21.1724L21.172 22L14.5605 15.3919C13.6281 16.1888 12.5168 16.7488 11.3212 17.024C10.1256 17.2991 8.88121 17.2814 7.69394 16.9724C6.50668 16.6633 5.41175 16.0719 4.5024 15.2488C3.59305 14.4256 2.89622 13.3949 2.47126 12.2446C2.0463 11.0942 1.90581 9.85826 2.06174 8.64194C2.21767 7.42562 2.66541 6.26498 3.36682 5.25889C4.06823 4.25279 5.00254 3.43103 6.09016 2.86361C7.17779 2.29619 8.38651 1.99991 9.61339 2ZM9.61339 3.17062C7.90497 3.17062 6.26652 3.84895 5.05849 5.05638C3.85045 6.26381 3.17179 7.90144 3.17179 9.60901C3.17179 11.3166 3.85045 12.9542 5.05849 14.1616C6.26652 15.3691 7.90497 16.0474 9.61339 16.0474C11.3218 16.0474 12.9603 15.3691 14.1683 14.1616C15.3763 12.9542 16.055 11.3166 16.055 9.60901C16.055 7.90144 15.3763 6.26381 14.1683 5.05638C12.9603 3.84895 11.3218 3.17062 9.61339 3.17062Z"
          fill="white"
          fill-opacity="0.87"
        />
      </svg>

      <input type="text" placeholder="Search" />
    </InputContainer>
  );
};

export default SearchInput;

const InputContainer = styled.div`
  position: relative;
  > .search-icon {
    width: 24px;
    height: 24px;
    position: absolute;
    left: calc(50% - (24px / 2) - 155px);
    top: calc(50% - (24px / 2));
  }
  > input {
    width: 310px;
    padding: 10px 0 10px 40px;
    border-style: none;
    background-color: #232429;
    color: #fff;
    outline: none;
    ::placeholder {
      color: #707070;
      font-size: 14px;
      font-weight: 200;
      line-height: 16.8px;
      letter-spacing: -2%;
    }
  }
`;
