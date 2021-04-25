import React from 'react';
import MovieListEntry from "./MovieListEntry";

const MovieList = ({movies, addMovieToWatchlist, setModalMovie, currentUser, setErrors}) =>
{
    return (
        <div className="movie-search-list mt-3">
            {movies.length
                ?
                    <ul className="list-group">
                        {movies.map(movie =>
                            <MovieListEntry key={movie.id} movie={movie} addMovieToWatchlist={addMovieToWatchlist} setModalMovie={setModalMovie} currentUser={currentUser} setErrors={setErrors} />
                        )}
                    </ul>
                :
                    <p>No results</p>
            }
        </div>
    )
}

export default MovieList;