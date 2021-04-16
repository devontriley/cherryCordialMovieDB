import React, { useState } from 'react';
import MovieListEntryDetails from "./MovieListEntryDetails";

const MovieListEntry = ({movie, addMovieToWatchlist}) =>
{
    const [detailsExpanded, setDetailsExpanded] = useState(false);

    let date = new Date(movie.release_date);
        date = date.getFullYear();

    const handleClick = (e) =>
    {
        setDetailsExpanded(!detailsExpanded);
    }

    return (
        <li className="list-group-item" key={movie.id}>
            <div className="d-flex justify-content-between">
                <button className="btn btn-link mb-0" onClick={handleClick}>{movie.title + ' (' + date + ')'}</button>
                <button className="add-to-watchlist btn btn-link" onClick={() => {addMovieToWatchlist(movie)}}>+ Watchlist</button>
            </div>
            <MovieListEntryDetails detailsExpanded={detailsExpanded} movie={movie} addMovieToWatchlist={addMovieToWatchlist} />
        </li>
    )
}

export default MovieListEntry;