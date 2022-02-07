import styled from "styled-components";
import UserIcon from "../assets/Main1stUserIcon.png";
const UserInfo = ({ by, onClick }) => {
  return (
    <StyledUserInfo>
      <img src={UserIcon} alt="" />
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
