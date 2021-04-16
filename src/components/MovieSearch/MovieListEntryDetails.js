import React from 'react';

const MovieListEntryDetails = ({detailsExpanded, movie, addMovieToWatchlist}) =>
{
    let className = 'movie-list-entry-details';

    if(!detailsExpanded) className+= ' collapse';

    return (
        <div id={'MovieListEntry'+movie.id} className={className}>
            <img src={'https://image.tmdb.org/t/p/original/'+movie.poster_path} />
            <p>{movie.overview}</p>
            <button className="btn btn-link" onClick={() => {addMovieToWatchlist(movie)}}>+ Add to Watchlist</button>
        </div>
    )
}

export default MovieListEntryDetails;
