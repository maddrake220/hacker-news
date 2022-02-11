import { useEffect } from "react";
import styled from "styled-components";
import { GetCommentsFetcher } from "../hooks/DataFetcher";
import BackButton from "./BackButton";
import CommentList from "./CommentList";
import ErrorMessage from "./ErrorMessage";
import Item from "./Item";
import NewButton from "./NewButton";

const ItemDetail = ({ errors, id, data, loading, getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  const [comments, isLoading, error] = GetCommentsFetcher(id);
  if (errors !== null) return <ErrorMessage message={errors} />;
  return (
    <StyledItemDetail>
      <header>
        <nav>
          <BackButton />
          <NewButton />
        </nav>
        <h2>Comments</h2>
      </header>
      {data.data && <Item item={data} loading={loading} />}
      {comments && (
        <CommentList comments={comments} loading={isLoading} error={error} />
      )}
    </StyledItemDetail>
  );
};

const StyledItemDetail = styled.section`
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
    position: relative;
  }
`;
export default ItemDetail;
