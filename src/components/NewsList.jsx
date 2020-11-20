import React, { useState, useEffect } from 'react';

import NewsCard from 'components/NewsCard';

const NewsList = ({ articles }) => {
  const [displayedArticles, setdisplayedArticles] = useState([]);
  const articlesNumber = 4;

  const selectedArticles = () => {
    if (articles !== undefined) {
      setdisplayedArticles(articles.slice(0, articlesNumber).map(article => <NewsCard key={article.title} article={article}/>))
    }
  }

  return (
    <div className="d-flex p-3">
      {displayedArticles}
    </div>
  );
}

export default NewsList;
