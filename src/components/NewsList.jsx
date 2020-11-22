import React from 'react';

import NewsCard from 'components/NewsCard';

const NewsList = ({ articles }) => {
  let displayedArticles = null;
  const articlesNumber = 4;

  if (articles !== undefined) {
    displayedArticles = articles.slice(0, articlesNumber).map(article => <NewsCard key={article.title} article={article}/>)
  }

  return (
    <div className="d-flex p-3">
      {displayedArticles}
    </div>
  );
}

export default NewsList;
