import React from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import MovieSearchContainer from "./components/MovieSearch/MovieSearchContainer";

function App()
{
    return (
        <div className="App">
            <header className="main-header">
                <h1><strong>cherryCordial: </strong>Movie db</h1>
            </header>
            <div className="row">
                <div className="col-8">
                    <MovieSearchContainer />
                </div>
            </div>
        </div>
    );
}

export default App;
