const getHeadlinesNews = () => {
  const baseURL = process.env.REACT_APP_NEWS_API_HEADLINES_URL;
  console.log(baseURL);
  const apiKey = process.env.REACT_APP_NEWS_API_API_KEY;
  console.log(apiKey);
  const url = baseURL + apiKey;
  console.log(url);

  return fetch(url)
    .then((response) => response.json())
    .then((response) => console.log(response));
};

export default getHeadlinesNews;
