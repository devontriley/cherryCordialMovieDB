import React from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import MovieSearch from "./MovieSearch/MovieSearch";
import Watchlist from "./Watchlist/Watchlist";

function App()
{
    return (
        <div className="App">
            <header className="main-header">
                <h1><strong>cherryCordial: </strong>Movie db</h1>
            </header>
            <div className="row">
                <div className="col-6">
                    <MovieSearch />
                </div>
                <div className="col-6">
                    <Watchlist />
                </div>
            </div>
        </div>
    );
}

export default App;
