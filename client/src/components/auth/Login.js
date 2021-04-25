import React, { useState, useEffect } from 'react';
import TextInput from "./TextInput";

const Login = ({loginUser, setAuthState, errors, setErrors, setCurrentLayout}) =>
{
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        errors: {}
    });

    const handleSubmit = (e) =>
    {
        loginUser(userData, setAuthState, setErrors);

        console.log(e, userData);

        e.preventDefault();
    }

    const handleChange = (e) =>
    {
        setUserData(prevState => ({
            ...prevState,
            [e.id]: e.value
        }));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <h2>Login</h2>
                    <p>Don't have an account? <a href="#" onClick={() => setCurrentLayout('register')}>Register</a></p>

                    <form noValidate onSubmit={handleSubmit}>
                        <TextInput name="email" label="Email" value={userData.email} onChange={handleChange} error={errors.email} />
                        <TextInput name="password" label="Passsword" value={userData.password} onChange={handleChange} error={errors.password} />
                        {errors.passwordIncorrect && <p className="invalid-feedback d-block">Incorrect password</p>}
                        <button className="btn btn-primary" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;