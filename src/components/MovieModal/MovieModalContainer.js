import React, { useState, useEffect } from 'react';
import MovieCast from "./MovieCast";
import fetchCast from "../fetchCast";

const MovieModal = ({movie, setModalMovie}) =>
{
    const [cast, setCast] = useState([]);

    useEffect(() =>
    {
        fetchCast(movie.id)
            .then(response =>{
                setCast(response.data.cast);
            });
    }, []);

    return (
        <div className="movie-modal-container">
            <div className="movie-modal">
                <div className="movie-modal-header">
                    <button className="movie-modal-close" onClick={() => setModalMovie(null)}>X</button>
                    <h1>{movie.title}</h1>
                    <img className="backdrop-image" src={'https://image.tmdb.org/t/p/original/'+movie.backdrop_path} width="100%" height="auto" />
                </div>
                <div className="row">
                    <div className="col-5">
                        <img className="movie-modal-poster" src={'https://image.tmdb.org/t/p/original/'+movie.poster_path} width="100%" height="auto" />
                    </div>
                    <div className="col-7">
                        <p><strong>Release date:</strong> {movie.release_date}</p>
                        <p>{movie.overview}</p>
                        <MovieCast cast={cast} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal;