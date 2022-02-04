import styled from "styled-components";
import UserIcon from "../assets/Main1stUserIcon.png";
const UserInfo = ({ by }) => {
  return (
    <StyledUserInfo>
      <img src={UserIcon} alt="" />
      <span>{by}</span>
    </StyledUserInfo>
  );
};
export default UserInfo;

const StyledUserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    margin-left: 4px;
  }
`;
