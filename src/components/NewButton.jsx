import { useCallback } from "react";
import styled from "styled-components";
import NewIcon from "../assets/new-icon.png";
const NewButton = () => {
  const onClickHandler = useCallback(() => {
    alert("미구현 기능");
  }, []);
  return (
    <StyledNewButton onClick={onClickHandler}>
      <div>
        <img src={NewIcon} alt="" />
      </div>
    </StyledNewButton>
  );
};

export default NewButton;

const StyledNewButton = styled.div`
  position: fixed;
  left: 320px;
  bottom: 88px;
  z-index: 99;
  cursor: pointer;
  > div {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #03c1ff;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
    }
  }
`;
