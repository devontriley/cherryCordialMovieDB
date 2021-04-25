import axios from 'axios';
import setAuthToken from "../utils/setAuthToken";
import jwtDecode from 'jwt-decode';
const isEmpty = require("is-empty");

// Register User
export const registerUser = (userData, setErrors, setCurrentLayout) =>
{
    axios.post('api/users/register', userData)
        .then(res => {
            console.log('User registered: ' + res);
            setCurrentLayout('login');
        })
        .catch(err => {
            console.log('error registering user');
            console.log(err.response);

            // update error state
            setErrors(err.response.data);
        });
}

// Login - get user token
export const loginUser = (userData, setAuthState, setErrors) =>
{
    axios.post('api/users/login', userData)
        .then(res =>
        {
            // Save to local storage
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);

            // Set token to auth header
            setAuthToken(token);

            // Decode token to get user data
            const jwt = jwtDecode(token);

            // Set current user and auth state
            updateAuthState(jwt, setAuthState);

            // Clear errors
            setErrors({});
        })
        .catch(err =>
        {
            // Update errors
            setErrors(err.response.data);
        });
}

// Set logged in user
export const updateAuthState = (jwt, setAuthState) =>
{
    // Set current user
    setAuthState(prevState => ({
        ...prevState,
        isAuthenticated: !isEmpty(jwt),
        jwt: jwt
    }));
}

// Log user out
export const logoutUser = (setAuthState, setCurrentLayout) =>
{
    // Remove token from local storage
    localStorage.removeItem('jwtToken');

    // Remove auth header for future requests
    setAuthToken(false);

    // Set current user to empty {} which will set isAuthenticated to false
    updateAuthState({}, setAuthState, setCurrentLayout);
}

export const getUserByID = (userID, setCurrentUser, setErrors) =>
{
    axios.post('api/users/user', {userID: userID})
        .then(res =>
        {
            const user = res.data;
            setCurrentUser(user);
        })
        .catch(err => setErrors(err.response.data));
}

export const addMovieToWatchlist = (movie, userEmail, setCurrentUser, setErrors) =>
{
    axios.post('api/users/user/watchlist', {movie: movie, userEmail: userEmail})
        .then(res => {
            const user = res.data;
            console.log(user);
            setCurrentUser(user);
        })
        .catch(err => setErrors(err.response.data));
}