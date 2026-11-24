import React, { useState, useEffect } from 'react';

const JOKE_API_URL = 'https://jokeapi.dev';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    const response = await fetch(JOKE_API_URL);
    const data = await response.json();
    setJoke(data.joke);
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app-container">
      <h1>Programming Joke Generator</h1>
      <p>{loading ? 'Loading...' : joke}</p>
    </div>
  );
}

export default App;