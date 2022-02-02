import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";
import NewStory from "./NewStory";
import Recent from "./Recent";
import TrendingNow from "./TrendingNow";

const ArticleList = ({ loading, pages, list, getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <StyledArticleList>
      <header>
        <h2>Article</h2>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div className="article-wrap">
          <div>
            {list?.map((story, index) => (
              <NewStory key={index} story={story} />
            ))}
          </div>
          <div>
            {pages &&
              pages
                .slice(0, 5)
                .map((v) => <NavLink to={`/article/${v}`}>{v}</NavLink>)}
          </div>
        </div>
      )}
    </StyledArticleList>
  );
};

const StyledArticleList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  font-family: "Pretendard Variable";
  font-style: normal;
  > header {
    > h2 {
      position: absolute;
      top: 40px;
      left: 20px;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: -0.02em;
      color: rgba(196, 196, 196, 0.52);
    }
  }
  > .article-wrap {
    height: 694px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
export default ArticleList;
