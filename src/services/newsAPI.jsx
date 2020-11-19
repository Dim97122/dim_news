const getHeadlinesNews = () => {
  const baseURL = process.env.REACT_APP_NEWS_API_HEADLINES_URL;
  const apiKey = process.env.REACT_APP_NEWS_API_API_KEY;
  const url = baseURL + apiKey;

  return fetch(url)
};

export default getHeadlinesNews;
