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

    const handleWatchlistClick = () =>
    {
        // If watchlist already contains movie, return
        if(currentUser.watchlist.some(ele => ele.id === movie.id)) return;

        addMovieToWatchlist(movie, currentUser.email, setErrors);
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
                <button
                    className={`add-to-watchlist btn btn-link`}
                    onClick={handleWatchlistClick}>
                    { currentUser.watchlist.some(ele => ele.id === movie.id)
                        ?
                            <svg style={{fill: 'red'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" className="svg-inline--fa fa-minus fa-w-14 fa-3x">
                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        :
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" className="svg-inline--fa fa-plus fa-w-14 fa-3x">
                                <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>
                    }
                </button>
            </div>
            <MovieListEntryDetails detailsExpanded={detailsExpanded} movie={movie} similarMovies={similarMovies} setModalMovie={setModalMovie} />
        </li>
    )
}

export default MovieListEntry;