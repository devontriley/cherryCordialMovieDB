import React from 'react';

const MovieListEntryDetails = ({detailsExpanded, movie, similarMovies, setModalMovie}) =>
{
    let className = 'movie-list-entry-details';

    if(!detailsExpanded) className+= ' collapse';

    return (
        <div id={'MovieListEntry'+movie.id} className={className}>
            <div className="d-flex justify-content-between">
                <img src={'https://image.tmdb.org/t/p/original/'+movie.poster_path} />
                <div className="px-4 pb-4">
                    <p>{movie.overview}</p>

                    <button className="btn btn-link" onClick={() => setModalMovie(movie)}>View More Details</button>

                    {similarMovies.length > 0 &&
                        <div>
                            <hr />
                            <h5>Similar Movies</h5>
                            <div className="similar-movies row">
                                {similarMovies.filter((m, index) => index < 6).map(m =>
                                    <div key={m.id} className="col-auto">
                                        <img src={'https://image.tmdb.org/t/p/original/'+m.poster_path} width="100px" onClick={() => setModalMovie(m)} />
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieListEntryDetails;
