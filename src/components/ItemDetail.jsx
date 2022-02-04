import { useEffect } from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import Item from "./Item";

const ItemDetail = ({ data, comments, loading, getData, getComments }) => {
  console.log("wtf", comments);
  useEffect(() => {
    getData();
  }, [getData]);
  useEffect(() => {
    getComments();
  }, [getComments]);
  return (
    <StyledItemDetail>
      <header>
        <h2>Comments</h2>
      </header>
      {data.data && <Item item={data} loading={loading} />}
      {comments && <CommentList comments={comments} loading={loading} />}
    </StyledItemDetail>
  );
};

const StyledItemDetail = styled.section`
  width: 390px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > header {
    font-family: "Pretendard Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.02em;
    color: rgba(196, 196, 196, 0.52);
    padding-top: 49px;
    padding-bottom: 38px;
  }
`;
export default ItemDetail;
