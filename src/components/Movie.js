import React, { useEffect, useState } from 'react';

const MovieComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map(movie => (
          <div key={movie.id} className="flex flex-col items-center">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full rounded-lg mb-2" />
            <p className="text-center">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieComponent;