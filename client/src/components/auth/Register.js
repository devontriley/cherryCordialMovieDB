import React, { useState, useEffect } from 'react';
import TextInput from "./TextInput";

const Register = ({registerUser, authState, setAuthState, errors, setErrors}) =>
{
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    });

    const handleSubmit = (e) =>
    {
        const newUser = {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            password2: userData.password2
        }

        registerUser(newUser, setErrors);

        e.preventDefault();
    }

    const handleChange = (e) =>
    {
        setUserData(prevState => ({
            ...prevState,
            [e.id]: e.value
        }));
    }

    // If logged in and user navigates to Register page, should redirect them to dashboard
    useEffect(() =>
    {
        if (authState.isAuthenticated)
        {
            // Show dashboard component or w/e
        }
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <h2>Register</h2>
                    <p>Already have an account? <a href="/login">Login</a></p>
                    <form noValidate id="create-account" className="create-account-form" onSubmit={handleSubmit}>
                        <TextInput name="name" label="Name" value={userData.name} onChange={handleChange} error={errors.name} />
                        <TextInput name="email" label="Email" value={userData.email} onChange={handleChange} error={errors.email} />
                        <TextInput name="password" label="Passsword" value={userData.password} onChange={handleChange} error={errors.password} />
                        <TextInput name="password2" label="Confirm Passsword" value={userData.password2} onChange={handleChange} error={errors.password2} />
                        <div className="field-group">
                            <button className="btn btn-primary" type="submit">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;