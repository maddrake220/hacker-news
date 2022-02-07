import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackIcon from "../assets/back-icon.png";
const BackButton = () => {
  const navigate = useNavigate();
  const onClickHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return <StyledBackButton src={BackIcon} onClick={onClickHandler} />;
};

export default BackButton;

const StyledBackButton = styled.img`
  position: absolute;
  left: -101px;
  bottom: 43px;
  cursor: pointer;
`;
