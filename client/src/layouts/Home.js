import React from 'react';
import MovieSearchContainer from "../components/MovieSearch/MovieSearchContainer";
import MovieModal from "../components/MovieModal/MovieModalContainer";
import Watchlist from "../components/Watchlist";

const Home = ({addMovieToWatchlist, setModalMovie, modalMovie, movies, authState, removeMovieFromWatchlist}) =>
{
    return (
        <div className="row">
            { modalMovie && <MovieModal movie={modalMovie} setModalMovie={setModalMovie} /> }
            <div className="col-lg-6">
                <MovieSearchContainer addMovieToWatchlist={addMovieToWatchlist} setModalMovie={setModalMovie} />
            </div>
            { authState.isAuthenticated && <div className="col-lg-6">
                <Watchlist movies={movies} removeMovieFromWatchlist={removeMovieFromWatchlist} />
            </div>}
        </div>
    );
};

export default Home;