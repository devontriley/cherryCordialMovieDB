import React, { useState, useEffect } from 'react';
import MovieListEntryDetails from "./MovieListEntryDetails";
import fetchSimilarMovies from "../fetchSimilarMovies";

const MovieListEntry = ({movie, addMovieToWatchlist, setModalMovie, currentUser, setErrors}) =>
{
    const [similarMovies, setSimilarMovies] = useState([]);
    const [detailsExpanded, setDetailsExpanded] = useState(false);

    let date = new Date(movie.release_date);
        date = date.getFullYear();

    const handleClick = (e) =>
    {
        setDetailsExpanded(!detailsExpanded);
    }

    useEffect(() =>
    {
        fetchSimilarMovies(movie)
            .then(movies => {
                setSimilarMovies(movies);
            });
    }, []);

    return (
        <li className="list-group-item" key={movie.id}>
            <div className="d-flex justify-content-between">
                <button className="btn btn-link mb-0" onClick={handleClick}>{movie.title + ' (' + date + ')'}</button>
                <button className="add-to-watchlist btn btn-link" onClick={() => {addMovieToWatchlist(movie, currentUser.email, setErrors)}}>+ Watchlist</button>
            </div>
            <MovieListEntryDetails detailsExpanded={detailsExpanded} movie={movie} similarMovies={similarMovies} setModalMovie={setModalMovie} />
        </li>
    )
}

export default MovieListEntry;