import React, { useState } from 'react';
import MovieListEntryDetails from "./MovieListEntryDetails";

const MovieListEntry = ({movie}) =>
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
            <button className="btn btn-link mb-0" onClick={handleClick}>{movie.title + ' (' + date + ')'}</button>
            <MovieListEntryDetails detailsExpanded={detailsExpanded} movie={movie} />
        </li>
    )
}

export default MovieListEntry;