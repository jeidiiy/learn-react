import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListWrapper = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언. useEffect에서 반환해야 하는 값은 뒷정리 함수임
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=81e7f740025843d8b8f7993b10f14919`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]); // 첫 렌더링에서만 api 호출

  if (loading) {
    return <NewsListWrapper>로딩 중...</NewsListWrapper>;
  }

  // 아직 기사들을 받지 못한 경우
  if (!articles) {
    return null;
  }

  return (
    <NewsListWrapper>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListWrapper>
  );
};

export default NewsList;
