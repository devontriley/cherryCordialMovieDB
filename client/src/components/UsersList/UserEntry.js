import React from 'react';

const UserEntry = ({user, deleteUser}) =>
{
    return (
        <li key={user._id} className="mb-4">
            <p className="mb-0">
                <strong>Username:</strong> {user.username}<br />
                <strong>Name:</strong> {user.firstName} {user.lastName}
            </p>
            <button onClick={() => deleteUser(user._id)} className="btn btn-link p-0">Delete User</button>
        </li>
    );
};

export default UserEntry;