import React, { useState, useEffect } from 'react';

const LatestNewsPage = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f2d7cf2d92bf4a3f9653b572a9baaf81`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNewsArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 bg-white px-1">
        {/* Sidebar content */}
      </div>

      {/* Main content area */}
      <div className="flex-1 bg-blue-50 mr-4 pl-5 pr-5">
        <h1 className="text-2xl font-bold mb-4 h-12">Latest News</h1>
        <p className="text-gray-700 font-bold font-mono h-24">
          Your hub for the latest news on India's thriving startup scene. Stay updated with the freshest insights, trends, and success stories shaping the future of entrepreneurship in India. Dive in now for your daily dose of startup news!
        </p>
        <div className="bg-white p-6 rounded-lg h-96 overflow-y-auto">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="h-full">
              {newsArticles.length > 0 ? (
                newsArticles.map((article, index) => (
                  <div key={index} className="mb-4">
                    <h2 className="text-xl font-semibold">{article.title}</h2>
                    <p className="text-gray-600">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      Read more
                    </a>
                  </div>
                ))
              ) : (
                <p>No news articles found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsPage;