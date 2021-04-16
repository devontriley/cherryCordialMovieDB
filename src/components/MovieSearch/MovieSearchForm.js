import React, { useState, useEffect } from 'react';
import SearchTerm from "./SearchTerm";
import GenreSelect from "./GenreSelect";
import fetchMovies from "../fetchMovies";

const filterMoviesByGenre = (movies, genre) =>
{
    let genreInt = parseInt(genre);

    let filteredResults = movies.filter(function(movie)
    {
        return movie.genre_ids.indexOf(genreInt) > -1;
    });

    return filteredResults;
}

const MovieSearchForm = ({setMovies}) =>
{
    const [searchTerm, setSearchTerm] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() =>
    {
        setSubmitDisabled(!searchTerm);

    }, [searchTerm]);

    const handleSubmission = (e) =>
    {
        const genreSelect = e.target[0];
        const textInput = e.target[1];

        fetchMovies(textInput.value)
            .then(movies =>
            {
                let filteredMovies = movies;

                if(genreSelect.value !== 'all')
                {
                    filteredMovies = filterMoviesByGenre(movies, genreSelect.value);
                }

                setMovies(filteredMovies);
            });

        e.preventDefault();
    }

    return (
        <form className="movie-search-form" onSubmit={handleSubmission}>
            <GenreSelect />
            <SearchTerm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="field-group">
                <button disabled={submitDisabled} className="btn btn-primary" type="submit">Search</button>
            </div>
        </form>
    );
}

export default MovieSearchForm;