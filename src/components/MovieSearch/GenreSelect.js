import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenreEntry from "./GenreEntry";

const getGenres = () => {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=b3a999b7703140535e95baeff2e338fa&language=en-US`)
        .then(res => {
            return res.data.genres;
        });
}

const GenreSelect = () =>
{
    const [genres, setGenres] = useState([]);

    useEffect(() =>
    {
        getGenres()
            .then(data => {
                setGenres(data);
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