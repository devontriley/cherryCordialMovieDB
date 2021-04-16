import React from 'react';

const MovieCast = ({cast}) =>
{
    return (
        <div>
            <h5>Cast</h5>
            {cast.filter((c, index) => index < 10).map(c =>
                <div key={c.id}>
                    <p>{c.character} <strong>{c.name}</strong></p>
                </div>
            )}
        </div>
    )
}

export default MovieCast;