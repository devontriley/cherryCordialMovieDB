import React from 'react';

const MovieSearchBar = ({onTextChange}) =>
{
    return (
        <div className="field-group">
            <label className="d-block">
                <input className="form-control" type="text" name="term" placeholder="Search term" />
            </label>
        </div>
    )
}

export default MovieSearchBar;