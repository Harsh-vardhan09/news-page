import React from 'react';
import './NewsCard.css';

const NewsCard = ({ title, description, imageUrl }) => {
  return (
    <div className="news-card">
      <img src={imageUrl} alt="news" />
      <div className="news-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
