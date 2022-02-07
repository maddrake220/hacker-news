import styled from "styled-components";
import { substract } from "../utils/DateCalculation";
import CommentInfo from "./CommentInfo";
import Loading from "./Loading";
import TimeInfo from "./TimeInfo";
import UserInfoModal from "./UserInfoModal";

const Item = ({ item, loading }) => {
  const {
    data: { by, url, title, time, descendants },
  } = item;
  const diff = substract(time);
  return (
    <StyledItem>
      {loading ? (
        <Loading />
      ) : (
        <div className="item-wrap">
          <a href={url} target="_blank" rel="noreferrer">
            <div className="item-title">
              <h3>{title}</h3>
            </div>
            <div className="item-url">
              <span>{url && url.split("/")[2]}</span>
            </div>
          </a>
          <div className="item-info">
            <UserInfoModal by={by} />
            <TimeInfo diff={diff} />
            <CommentInfo
              descendants={descendants}
              style={{ color: "rgba(196, 196, 196, 0.52)" }}
            />
          </div>
        </div>
      )}
    </StyledItem>
  );
};

const StyledItem = styled.div`
  width: 350px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: normal;
  letter-spacing: -2%;
  font-weight: 500;
  .item-title {
    h3 {
      font-size: 20px;
      line-height: 24px;
    }
  }
  .item-url {
    span {
      height: 24px;
      font-size: 16px;
      line-height: 19px;
      color: rgba(255, 255, 255, 0.53);
    }
  }
  .item-info {
    margin-top: 3px;
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: rgba(196, 196, 196, 0.52);
    > div {
      margin-right: 12px;
    }
  }
`;
export default Item;
