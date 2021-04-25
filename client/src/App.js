import React, { useState, useEffect } from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import Login from './components/auth/Login';
import Register from "./components/auth/Register";
import setAuthToken from "./utils/setAuthToken";
import jwtDecode from 'jwt-decode';
import { registerUser, updateAuthState, logoutUser, loginUser, getUserByID, addMovieToWatchlist } from './actions/authActions';
import NotFoundPage from "./layouts/NotFoundPage";
import Home from "./layouts/Home";
const isEmpty = require('is-empty');

function App()
{
    // Layout display (pages)
    const [currentLayout, setCurrentLayout] = useState('');
    // Auth
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        jwt: {}
    });
    // Users
    const [currentUser, setCurrentUser] = useState({
        email: '',
        name: '',
        watchlist: []
    });
    // Movies
    const [modalMovie, setModalMovie] = useState(null);
    // Errors
    const [errors, setErrors] = useState({});

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
            const jwt = jwtDecode(token);

            updateAuthState(jwt, setAuthState);

            getUserByID(jwt.id, setCurrentUser, setErrors);

            // Check for expired token
            const currentTime = Date.now() / 1000; // to get in milliseconds

            if (jwt.exp < currentTime)
            {
                // Logout user
                logoutUser(setAuthState);

                // Redirect to login
                setCurrentLayout('login');
            }
        }
    }, []);

    const removeMovieFromWatchlist = (movie) =>
    {
        const watchlist = currentUser.watchlist;

        if(watchlist.length > 0)
        {
            for (let i = 0; i < watchlist.length; i++)
            {
                let obj = watchlist[i];

                // remove movie from watchlist if id matches
                if (movie.id === obj.id)
                {
                    watchlist.splice(i, 1);
                    i--;
                }
            }
        }

        console.log(watchlist);
    }

    useEffect(() =>
    {
        console.log(currentUser);
    }, [currentUser])

    const handleLogout = () =>
    {
        logoutUser(setAuthState, setCurrentLayout);
    }

    const handleLinkClick = (e, layout) =>
    {
        setCurrentLayout(layout);

        e.preventDefault();
    }

    const handleAddMovieToWatchlist = (movie) =>
    {
        addMovieToWatchlist(movie, currentUser.email, setCurrentUser, setErrors);
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
                            Hello, {currentUser.name}
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
                {!authState.isAuthenticated && <span>
                    <a href="#" onClick={(e) => handleLinkClick(e, 'login')}>Login</a>
                    <a href="#" onClick={(e) => handleLinkClick(e, 'register')}>Register</a>
                </span>}
            </nav>

            {currentLayout == '' &&
                <Home
                    setModalMovie={setModalMovie}
                    modalMovie={modalMovie}
                    authState={authState}
                    currentUser={currentUser}
                    addMovieToWatchlist={handleAddMovieToWatchlist}
                    removeMovieFromWatchlist={removeMovieFromWatchlist}
                    setErrors={setErrors} />
            }

            {currentLayout == 'login' && authState.isAuthenticated &&
                <Home
                    setModalMovie={setModalMovie}
                    modalMovie={modalMovie}
                    authState={authState}
                    currentUser={currentUser}
                    addMovieToWatchlist={handleAddMovieToWatchlist}
                    removeMovieFromWatchlist={removeMovieFromWatchlist}
                    setErrors={setErrors} />
            }

            {currentLayout == 'login' && !authState.isAuthenticated &&
                <Login
                    loginUser={loginUser}
                    setAuthState={setAuthState}
                    errors={errors}
                    setErrors={setErrors}
                    setCurrentLayout={setCurrentLayout} />
            }

            {currentLayout == 'register' &&
                <Register
                    registerUser={registerUser}
                    authState={authState}
                    setAuthState={setAuthState}
                    errors={errors}
                    setErrors={setErrors}
                    setCurrentLayout={setCurrentLayout} />
            }

            {currentLayout == null && <NotFoundPage/>}
        </div>
    );
}

export default App;
