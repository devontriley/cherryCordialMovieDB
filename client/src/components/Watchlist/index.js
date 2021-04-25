import React from 'react';
import MovieList from './MovieList';

const Watchlist = ({currentUser, removeMovieFromWatchlist}) =>
{
    return (
        <div className="watchlist p-4 rounded">
            <h2 className="mb-3">Watchlist</h2>
            <MovieList currentUser={currentUser} removeMovieFromWatchlist={removeMovieFromWatchlist} />
        </div>
    )
}

export default Watchlist;