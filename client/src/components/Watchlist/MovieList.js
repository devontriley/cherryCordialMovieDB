import React from 'react';
import MovieListEntry from './MovieListEntry';

const MovieList = ({currentUser, removeMovieFromWatchlist}) =>
{
    return (
        <div className="mt-3">
            {currentUser.watchlist.length
                ?
                    <ul className="list-group">
                        {currentUser.watchlist.map(movie =>
                            <MovieListEntry key={movie.id} movie={movie} removeMovieFromWatchlist={removeMovieFromWatchlist} />
                        )}
                    </ul>
                :
                    <p>No results</p>
            }
        </div>
    )
}

export default MovieList;