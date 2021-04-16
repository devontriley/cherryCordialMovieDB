import React, { useState, useEffect } from 'react';
import GenreEntry from "./GenreEntry";
import fetchGenres from "../fetchGenres";

const GenreSelect = () =>
{
    const [genres, setGenres] = useState([]);

    useEffect(() =>
    {
        fetchGenres()
            .then(data => {
                setGenres(data.data.genres);
            });
    }, []);

    return (
        <div className="field-group mb-2">
            <select defaultValue="all" className="form-control">
                <option key={0} name="all" value="all">All</option>
                {genres.map(genre =>
                    <GenreEntry key={genre.id} genre={genre} />
                )}
            </select>
        </div>
    )
}

export default GenreSelect;