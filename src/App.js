import React, { useState } from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import MovieSearchContainer from "./components/MovieSearch/MovieSearchContainer";
import Watchlist from "./components/Watchlist/WatchlistContainer";

function App()
{
    const [watchlistMovies, updateWatchlistMovies] = useState([]);

    const handleAddToWatchlist = (movie) =>
    {
        updateWatchlistMovies( arr => [...arr, movie]);
    }

    const handleRemoveFromWatchlist = (movieToRemove) =>
    {
        updateWatchlistMovies(watchlistMovies.filter(movie => movie.id !== movieToRemove.id));
    }

    return (
        <div className="App">
            <header className="main-header">
                <h1><strong>cherryCordial: </strong>Movie db</h1>
            </header>
            <div className="row">
                <div className="col-7">
                    <MovieSearchContainer addMovieToWatchlist={handleAddToWatchlist} />
                </div>
                <div className="col-5">
                    <Watchlist movies={watchlistMovies} removeMovieFromWatchlist={handleRemoveFromWatchlist} />
                </div>
            </div>
        </div>
    );
}

export default App;
