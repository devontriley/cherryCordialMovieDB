import React from 'react';
import MovieList from './MovieList';

// Remove movie from watchlist
// Select to sort by genre

const Watchlist = ({movies, removeMovieFromWatchlist}) =>
{
    return (
        <div className="watchlist p-4">
            <h2 className="mb-3">Watchlist</h2>
            <MovieList movies={movies} removeMovieFromWatchlist={removeMovieFromWatchlist} />
        </div>
    )
}

export default Watchlist;