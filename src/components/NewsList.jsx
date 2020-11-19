import React, { useState, useEffect } from 'react';

import NewsCard from 'components/NewsCard';

const NewsList = ({ articles }) => {
  const [displayedArticles, setdisplayedArticles] = useState([]);
  const articlesNumber = 4;

  const selectedArticles = () => {
    setdisplayedArticles(articles.slice(0, articlesNumber).map(article => <NewsCard key={article.title} article={article}/>))
  }

  useEffect(() => {
    selectedArticles();
  }, []);

  return (
    <div>
      {displayedArticles}
    </div>
  );
}

export default NewsList;
