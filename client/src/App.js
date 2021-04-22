import React, { useState, useEffect } from 'react';
import './App.css';
import './node_modules/bootstrap/dist/css/bootstrap.css';
import MovieSearchContainer from "./components/MovieSearch/MovieSearchContainer";
import Watchlist from "./components/Watchlist/WatchlistContainer";
import MovieModal from "./components/MovieModal/MovieModalContainer";
import Login from './components/auth/Login';
import Register from "./components/auth/Register";
import setAuthToken from "./utils/setAuthToken";
import jwtDecode from 'jwt-decode';
import { registerUser, setCurrentUser, logoutUser, loginUser } from './actions/authActions';
import NotFoundPage from "./layouts/NotFoundPage";
import Home from "./layouts/Home";
const isEmpty = require('is-empty');

function App()
{
    // Routing
    const [currentLayout, setCurrentLayout] = useState('');

    // Auth
    const [errors, setErrors] = useState({});
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: {},
        loading: false
    });

    // Movies
    const [watchlistMovies, updateWatchlistMovies] = useState([]);
    const [modalMovie, setModalMovie] = useState(null);

    // Log errors
    useEffect(() =>
    {
        if(!isEmpty(errors))
        {
            console.log(errors);
        }
    }, [errors]);

    // Check local storage for jwtToken and sets currentUser
    useEffect(() =>
    {
        // Check for token to keep user logged in
        if (localStorage.jwtToken)
        {
            // Set auth token header auth
            const token = localStorage.jwtToken;
            setAuthToken(token);

            // Decode token and get user info and exp
            const decoded = jwtDecode(token);

            // Set current user and auth state
            setCurrentUser(decoded, setAuthState);

            // Check for expired token
            const currentTime = Date.now() / 1000; // to get in milliseconds

            if (decoded.exp < currentTime)
            {
                // Logout user
                logoutUser(setAuthState);

                // Redirect to login
                console.log('log you out cuz the token expired');

                //window.location.href = "./login";
            }
        }
    }, []);

    const handleAddToWatchlist = (movie) =>
    {
        if(watchlistMovies.includes(movie)) return;

        updateWatchlistMovies( arr => [...arr, movie]);
    }

    const handleRemoveFromWatchlist = (movieToRemove) =>
    {
        updateWatchlistMovies(watchlistMovies.filter(movie => movie.id !== movieToRemove.id));
    }

    const handleLogout = () =>
    {
        logoutUser(setAuthState, setCurrentLayout);
    }

    const handleLogin = () =>
    {

    }

    const handleLinkClick = (e, layout) =>
    {
        setCurrentLayout(layout);

        e.preventDefault();
    }

    return (
        <div>

            <header className="main-header">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <h1><strong>cherryCordial: </strong>Movie db</h1>
                    </div>
                    <div className="col-auto">
                        {authState.isAuthenticated && <div>
                            Hello, {authState.user.name}
                            <button className="logout-button btn btn-link" onClick={handleLogout}>Logout</button>
                        </div>}
                        {!authState.isAuthenticated && <div>
                            <button className="login-button btn btn-link" onClick={(e) => handleLinkClick(e, 'login')}>Login</button>
                        </div>}
                    </div>
                </div>
            </header>

            <nav>
                <a href="#" onClick={(e) => handleLinkClick(e, '')}>Home</a>
                <a href="#" onClick={(e) => handleLinkClick(e, 'login')}>Login</a>
                <a href="#" onClick={(e) => handleLinkClick(e, 'register')}>Register</a>
            </nav>

            {currentLayout == '' && <Home addMovieToWatchlist={handleAddToWatchlist} setModalMovie={setModalMovie} modalMovie={modalMovie} />}
            {currentLayout == 'login' && <Login loginUser={loginUser} setAuthState={setAuthState} errors={errors} setErrors={setErrors} setCurrentLayout={setCurrentLayout} />}
            {currentLayout == 'register' && <Register registerUser={registerUser} authState={authState} setAuthState={setAuthState} errors={errors} setErrors={setErrors} setCurrentLayout={setCurrentLayout} />}
            {currentLayout == null && <NotFoundPage/>}
        </div>
    );

    // return (
    //     <div className="App">
    //
    //         { modalMovie && <MovieModal movie={modalMovie} setModalMovie={setModalMovie} /> }
    //
    //         <header className="main-header">
    //             <h1><strong>cherryCordial: </strong>Movie db</h1>
    //             <button onClick={() => logoutUser(setAuthState)}>Logout</button>
    //         </header>
    //
    //         <p>{authState.user.name}</p>
    //
    //         <Login loginUser={loginUser} setAuthState={setAuthState} errors={errors} setErrors={setErrors} />
    //
    //         {/*<Register registerUser={registerUser} authState={authState} setAuthState={setAuthState} errors={errors} setErrors={setErrors}/>*/}
    //
    //         <div className="row">
    //             <div className="col-7">
    //                 <MovieSearchContainer addMovieToWatchlist={handleAddToWatchlist} setModalMovie={setModalMovie} />
    //             </div>
    //             <div className="col-5">
    //                 <Watchlist movies={watchlistMovies} removeMovieFromWatchlist={handleRemoveFromWatchlist} />
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default App;
