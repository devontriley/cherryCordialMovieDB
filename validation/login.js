const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data)
{
    let errors = {};

    // Convert empty fields to an empty string so we can use with validator
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if (!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must be at least 6 characters';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}