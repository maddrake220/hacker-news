import styled from "styled-components";
const UserInfo = ({ by, onClick, isIcon = true }) => {
  return (
    <StyledUserInfo>
      {isIcon && (
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.44451 4.94444C6.67181 4.94444 7.66673 3.94952 7.66673 2.72222C7.66673 1.49492 6.67181 0.5 5.44451 0.5C4.21721 0.5 3.22229 1.49492 3.22229 2.72222C3.22229 3.94952 4.21721 4.94444 5.44451 4.94444Z"
            stroke="#C4C4C4"
            stroke-opacity="0.52"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 10.5001V8.27786C1 7.66419 1.49746 7.16675 2.11111 7.16675H8.77778C9.39144 7.16675 9.88889 7.66419 9.88889 8.27786V10.5001"
            stroke="#C4C4C4"
            stroke-opacity="0.52"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      <span onClick={onClick}>{by}</span>
    </StyledUserInfo>
  );
};
export default UserInfo;

const StyledUserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > span {
    margin-left: 4px;
  }
`;
