import React from 'react';
import MovieList from './MovieList';

const Watchlist = ({movies, removeMovieFromWatchlist}) =>
{
    return (
        <div className="watchlist p-4 rounded">
            <h2 className="mb-3">Watchlist</h2>
            <MovieList movies={movies} removeMovieFromWatchlist={removeMovieFromWatchlist} />
        </div>
    )
}

export default Watchlist;