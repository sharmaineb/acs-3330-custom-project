import React, { useEffect, useState, useRef } from 'react';

const MovieComponent = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
        if (searchQuery) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${searchQuery}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMovieClick = async (movie) => {
    setSelectedMovie(movie);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
      const data = await response.json();
      if (data.results.length > 0) {
        setTrailerKey(data.results[0].key);
      } else {
        setTrailerKey('');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setTrailerKey('');
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8" onClick={handleOutsideClick}>
      <h1 className="text-3xl font-bold mb-4">Popular Movies</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search movies by title"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border border-gray-400 px-4 py-2 rounded-lg w-full"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map(movie => (
          <div key={movie.id} className="relative">
            <img 
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              alt={movie.title} 
              className="w-full rounded-lg mb-2 cursor-pointer"
              onClick={() => handleMovieClick(movie)}
            />
            <p className="text-center">{movie.title}</p>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div ref={modalRef} className="bg-white p-6 rounded-lg max-w-3xl overflow-hidden relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none z-20">
              Close
            </button>
            <h2 className="text-3xl font-bold mb-2">{selectedMovie.title}</h2>
            {trailerKey && (
              <div className="mb-4">
                <iframe 
                  width="100%" 
                  height="315" 
                  src={`https://www.youtube.com/embed/${trailerKey}`} 
                  title={`${selectedMovie.title} Trailer`}
                  frameBorder="0" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            )}
            {!trailerKey && <p>No trailer available.</p>}
            <p className="text-lg mb-2"><strong>Release Date:</strong> {selectedMovie.release_date}</p>
            <p className="text-lg mb-2"><strong>Average Vote:</strong> {selectedMovie.vote_average}</p>
            <p className="text-lg mb-4"><strong>Overview:</strong> {selectedMovie.overview}</p>
            <a 
              href={`https://www.themoviedb.org/movie/${selectedMovie.id}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              View on TMDB
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieComponent;