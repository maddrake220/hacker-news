import styled from "styled-components";
const TimeInfo = ({ diff }) => {
  return (
    <StyledTimeInfo>
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.88892 10.5C8.65034 10.5 10.8889 8.26142 10.8889 5.5C10.8889 2.73858 8.65034 0.5 5.88892 0.5C3.12749 0.5 0.888916 2.73858 0.888916 5.5C0.888916 8.26142 3.12749 10.5 5.88892 10.5Z"
          stroke="#C4C4C4"
          stroke-opacity="0.52"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.88892 2.5V5.5L7.88892 7.5"
          stroke="#C4C4C4"
          stroke-opacity="0.52"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span>{diff}</span>
    </StyledTimeInfo>
  );
};

const StyledTimeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    margin-left: 4px;
  }
`;
export default TimeInfo;
