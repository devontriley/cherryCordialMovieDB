import React from 'react';
import MovieSearchContainer from "../components/MovieSearch/MovieSearchContainer";
import MovieModal from "../components/MovieModal/MovieModalContainer";
import Watchlist from "../components/Watchlist";

const Home = ({setModalMovie, modalMovie, authState, currentUser, addMovieToWatchlist, removeMovieFromWatchlist, setErrors}) =>
{
    return (
        <div className="row">
            { modalMovie && <MovieModal movie={modalMovie} setModalMovie={setModalMovie} /> }
            <div className="col-lg-6">
                <MovieSearchContainer addMovieToWatchlist={addMovieToWatchlist} setModalMovie={setModalMovie} currentUser={currentUser} setErrors={setErrors} />
            </div>
            { authState.isAuthenticated && <div className="col-lg-6">
                <Watchlist currentUser={currentUser} removeMovieFromWatchlist={removeMovieFromWatchlist} />
            </div>}
        </div>
    );
};

export default Home;