import React, { useState, useEffect } from 'react';

import NewsList from 'components/NewsList';

import getHeadlinesNews from 'services/newsAPI';

import 'styles/App.scss';

const App = () => {
  const [headlinesNews, setHeadlinesNews] = useState(null);

  const loadHeadlines = () => {
    getHeadlinesNews()
    .then((response) => response.json())
    .then((result) => {setHeadlinesNews(result.articles)});
  }

  useEffect(() => {
    loadHeadlines();
  }, []);

  if (headlinesNews === null) {
    return (
      <div className="App">
        <h1>Pas de News pour l'instant</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>DimNews</h1>
        <NewsList articles={headlinesNews} />
      </div>
    );
  }
}

export default App;
