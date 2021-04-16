import React, { useState } from 'react';
import MovieListEntryDetails from './MovieListEntryDetails';

const MovieListEntry = ({movie, removeMovieFromWatchlist}) =>
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
                <button className="d-inline btn btn-link mb-0" onClick={handleClick}>{movie.title + ' (' + date + ')'}</button>
                <button className="remove-from-watchlist d-inline btn btn-link" onClick={() => removeMovieFromWatchlist(movie)}>Remove</button>
            </div>
            <MovieListEntryDetails detailsExpanded={detailsExpanded} movie={movie} />
        </li>
    )
}

export default MovieListEntry;