import React from 'react';
import NewsCard from './NewsCard';
import newsData from '../data/newsData';

const NewsList = () => {
  return (
    <div className="news-list">
      {newsData.map((news) => (
        <NewsCard
          key={news.id}
          title={news.title}
          description={news.description}
          imageUrl={news.imageUrl}
          
        />
      ))}
    </div>
  );
};

export default NewsList;
