import React, { useState } from 'react';
import MovieSearchForm from "./MovieSearchForm";
import DisplayResults from "./DisplayResults";

const MovieSearch = () =>
{
    const [searchResults, setSearchResults] = useState('No results');

    return (
        <div className="border p-4">
            <h2 className="mb-3">Movie Search</h2>
            <MovieSearchForm setSearchResults={setSearchResults} />
            <DisplayResults searchResults={searchResults} />
        </div>
    )
}

export default MovieSearch;