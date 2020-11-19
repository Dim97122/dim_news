import React from 'react';

const NewsCard = ({ article }) => {
  console.log(article);
  return (
    <div>
      <div>{article.title}</div>
      <img src={article.urlToImage} />
    </div>
  );
}

export default NewsCard;
