import React from 'react';

const DisplayResults = ({searchResults}) =>
{
    return (
        <div className="results mt-3">
            {!searchResults.length || typeof searchResults == 'string'
                ?
                    <p>No results</p>
                :
                    <ul>
                        {searchResults.map(result => {
                            return (
                                <li key={result.id}>{result.title}</li>
                            )
                        })}
                    </ul>
            }
        </div>
    )
}

export default DisplayResults;