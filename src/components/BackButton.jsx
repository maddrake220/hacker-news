import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const BackButton = () => {
  const navigate = useNavigate();
  const onClickHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <svg
      onClick={onClickHandler}
      style={{
        position: "absolute",
        left: "-101px",
        bottom: "43px",
        cursor: "pointer",
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.71 6.70992C14.6175 6.61722 14.5076 6.54367 14.3867 6.49349C14.2657 6.44331 14.136 6.41748 14.005 6.41748C13.8741 6.41748 13.7444 6.44331 13.6234 6.49349C13.5024 6.54367 13.3926 6.61722 13.3 6.70992L8.71005 11.2999C8.61734 11.3924 8.5438 11.5023 8.49361 11.6233C8.44343 11.7443 8.4176 11.874 8.4176 12.0049C8.4176 12.1359 8.44343 12.2656 8.49361 12.3865C8.5438 12.5075 8.61734 12.6174 8.71005 12.7099L13.3 17.2999C13.3926 17.3925 13.5025 17.4659 13.6235 17.5161C13.7445 17.5662 13.8741 17.5919 14.005 17.5919C14.136 17.5919 14.2656 17.5662 14.3866 17.5161C14.5076 17.4659 14.6175 17.3925 14.71 17.2999C14.8026 17.2073 14.8761 17.0974 14.9262 16.9765C14.9763 16.8555 15.0021 16.7259 15.0021 16.5949C15.0021 16.464 14.9763 16.3343 14.9262 16.2134C14.8761 16.0924 14.8026 15.9825 14.71 15.8899L10.83 11.9999L14.71 8.11992C15.1 7.72992 15.09 7.08992 14.71 6.70992Z"
        fill="white"
        fill-opacity="0.87"
      />
    </svg>
  );
};

export default BackButton;

const StyledBackButton = styled.img``;
