import styled from "styled-components";
import ClockIcon from "../assets/Main1stTimeIcon.png";
const TimeInfo = ({ diff }) => {
  return (
    <StyledTimeInfo>
      <img src={ClockIcon} alt="" />
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
