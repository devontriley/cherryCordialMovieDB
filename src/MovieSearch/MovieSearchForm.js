import React from 'react';
import MovieSearchBar from "./MovieSearchBar";
import GenreSelect from "./GenreSelect";
import axios from "axios";

const searchMovies = (keyword) =>
{
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b3a999b7703140535e95baeff2e338fa&query=${keyword}`)
        .then(res => {
            return res.data.results;
        });
}

const filterResultsByGenre = (results, genre) =>
{
    let genreInt = parseInt(genre);

    let filteredResults = results.filter(function(item)
    {
        return item.genre_ids.indexOf(genreInt) > -1;
    });

    return filteredResults;
}

const MovieSearchForm = ({setSearchResults}) =>
{
    const handleSubmission = (e) =>
    {
        const genreSelect = e.target[0];
        const textInput = e.target[1];

        searchMovies(textInput.value)
            .then(data =>
            {
                let filteredData = filterResultsByGenre(data, genreSelect.value);

                setSearchResults(filteredData);
            });

        e.preventDefault();
    }

    return (
        <form className="movie-search-form" onSubmit={handleSubmission}>
            <GenreSelect />
            <MovieSearchBar />
            <div className="field-group">
                <button className="btn btn-primary" type="submit">Search</button>
            </div>
        </form>
    );
}

export default MovieSearchForm;