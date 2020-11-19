import React, { useState, useEffect } from 'react';

import getHeadlinesNews from 'services/newsAPI';

import 'styles/App.css';

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
      <>
        Pas de News pour l'instant
      </>
    );
  } else {
    return (
      <>
        yo
      </>
    );
  }
}

export default App;
