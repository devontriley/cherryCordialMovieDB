import React from 'react';

const SearchTerm = ({searchTerm, setSearchTerm}) =>
{
    const handleTextChange = (e) =>
    {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="field-group">
            <label className="d-block">
                <input className="form-control" type="text" value={searchTerm} name="term" placeholder="Search term" onChange={handleTextChange} />
            </label>
        </div>
    )
}

export default SearchTerm;