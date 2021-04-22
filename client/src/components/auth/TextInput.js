import React from 'react';

const TextInput = ({name, label, value, onChange, error}) =>
{
    const handleChange = (e) =>
    {
        onChange({id: e.target.id, value: e.target.value});
    }

    return (
        <div className="field-group mb-3">
            <input onChange={handleChange} id={name} className="form-control" type="text" name={name} aria-label={name} placeholder={label} value={value} />
            { error && <div className="invalid-feedback d-block">{error}</div> }
        </div>
    )
}

export default TextInput;