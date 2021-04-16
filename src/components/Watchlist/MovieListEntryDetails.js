import React from 'react';

const MovieListEntryDetails = ({detailsExpanded, movie}) =>
{
    let className = 'movie-list-entry-details';

    if(!detailsExpanded) className+= ' collapse';

    return (
        <div id={'MovieListEntry'+movie.id} className={className}>
            <img src={'https://image.tmdb.org/t/p/original/'+movie.poster_path} />
            <p>{movie.overview}</p>
        </div>
    )
}

export default MovieListEntryDetails;
