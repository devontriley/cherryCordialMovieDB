import React from 'react';
import MovieSearchContainer from "../components/MovieSearch/MovieSearchContainer";
import MovieModal from "../components/MovieModal/MovieModalContainer";

const Home = ({addMovieToWatchlist, setModalMovie, modalMovie}) =>
{
    return (
        <div>
            { modalMovie && <MovieModal movie={modalMovie} setModalMovie={setModalMovie} /> }
            <MovieSearchContainer addMovieToWatchlist={addMovieToWatchlist} setModalMovie={setModalMovie} />
        </div>
    );
};

export default Home;