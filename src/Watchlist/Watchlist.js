import React, { useState } from 'react';
import GenreSelect from "../MovieSearch/GenreSelect";
import DisplayResults from "../MovieSearch/DisplayResults";

const Watchlist = () => {
    const [searchResults, setSearchResults] = useState('No results');

    return (
        <div className="border p-4">
            <h2 className="mb-3">Watchlist</h2>
            <GenreSelect />
            <DisplayResults searchResults={searchResults} />
        </div>
    )
}

export default Watchlist;