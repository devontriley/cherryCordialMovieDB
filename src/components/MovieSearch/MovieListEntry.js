import React, { useState, useEffect } from 'react';
import MovieListEntryDetails from "./MovieListEntryDetails";
import axios from "axios";

const getSimilarMovies = (movie) =>
{
    return axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=b3a999b7703140535e95baeff2e338fa`)
        .then(res => {
            return res.data.results;
        });
}

const MovieListEntry = ({movie, addMovieToWatchlist}) =>
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
        console.log('test');
        getSimilarMovies(movie)
            .then(movies => {
                setSimilarMovies(movies);
            });
    }, []);

    return (
        <li className="list-group-item" key={movie.id}>
            <div className="d-flex justify-content-between">
                <button className="btn btn-link mb-0" onClick={handleClick}>{movie.title + ' (' + date + ')'}</button>
                <button className="add-to-watchlist btn btn-link" onClick={() => {addMovieToWatchlist(movie)}}>+ Watchlist</button>
            </div>
            <MovieListEntryDetails detailsExpanded={detailsExpanded} movie={movie} similarMovies={similarMovies} />
        </li>
    )
}

export default MovieListEntry;