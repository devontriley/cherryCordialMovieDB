import React, { useState } from 'react';
import MovieSearchForm from "./MovieSearchForm";
import MovieList from "./MovieList";

const MovieSearchContainer = ({addMovieToWatchlist, setModalMovie, currentUser, setErrors}) =>
{
    const [movies, setMovies] = useState([]);

    return (
        <div className="movie-search p-4 rounded">
            <h2 className="mb-3">Movie Search</h2>
            <MovieSearchForm setMovies={setMovies} />
            <MovieList movies={movies} addMovieToWatchlist={addMovieToWatchlist} setModalMovie={setModalMovie} currentUser={currentUser} setErrors={setErrors} />
        </div>
    )
}

export default MovieSearchContainer;