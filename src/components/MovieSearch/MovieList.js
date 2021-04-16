import React from 'react';
import MovieListEntry from "./MovieListEntry";

const MovieList = ({movies, addMovieToWatchlist, setModalMovie}) =>
{
    return (
        <div className="mt-3">
            {movies.length
                ?
                    <ul className="list-group">
                        {movies.map(movie =>
                            <MovieListEntry key={movie.id} movie={movie} addMovieToWatchlist={addMovieToWatchlist} setModalMovie={setModalMovie} />
                        )}
                    </ul>
                :
                    <p>No results</p>
            }
        </div>
    )
}

export default MovieList;