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
export const loginUser = (userData, setAuthState, setErrors, setCurrentLayout) =>
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
            const decoded = jwtDecode(token);

            // Set current user and auth state
            setCurrentUser(decoded, setAuthState, setCurrentLayout);

            setErrors({});
        })
        .catch(err =>
        {
            // update error state
            setErrors(err.response.data);
        });
}

// Set logged in user
export const setCurrentUser = (decoded, setAuthState, setCurrentLayout) =>
{
    // Set current user
    setAuthState(prevState => ({
        ...prevState,
        isAuthenticated: !isEmpty(decoded),
        user: decoded
    }));

    // Redirect to profile
    //setCurrentLayout('profile');
}

// Log user out
export const logoutUser = (setAuthState, setCurrentLayout) =>
{
    // Remove token from local storage
    localStorage.removeItem('jwtToken');

    // Remove auth header for future requestss
    setAuthToken(false);

    // Set current user to empty {} which will set isAuthenticated to false
    setCurrentUser({}, setAuthState, setCurrentLayout);
}