import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            <select className="form-control">
                {genres.map(genre =>
                    <option key={genre.id} name={genre.name} value={genre.id}>{genre.name}</option>
                )}
            </select>
        </div>
    )
}

export default GenreSelect;