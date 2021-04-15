import React from 'react';
import MovieListEntry from "./MovieListEntry";

const MovieList = ({movies}) =>
{
    return (
        <div className="mt-3">
            {movies.length
                ?
                    <ul className="list-group">
                        {movies.map(movie =>
                            <MovieListEntry key={movie.id} movie={movie} />
                        )}
                    </ul>
                :
                    <p>No results</p>
            }
        </div>
    )
}

export default MovieList;