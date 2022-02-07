import styled from "styled-components";
import SEARCHICON from "../assets/SearchIcon.png";
const Search = () => {
  return (
    <InputContainer>
      <label></label>
      <input type="text" placeholder="Search" />
    </InputContainer>
  );
};

export default Search;

const InputContainer = styled.div`
  position: relative;
  > label {
    background-image: url(${SEARCHICON});
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
