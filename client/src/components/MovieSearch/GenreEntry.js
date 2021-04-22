import React from 'react';

const GenreEntry = ({genre}) =>
{
    return (
        <option key={genre.id} name={genre.name} value={genre.id}>{genre.name}</option>
    );
}

export default GenreEntry;