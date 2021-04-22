import React from 'react';
import UserEntry from "./UserEntry";

const UsersList = ({users, deleteUser}) =>
{
    return (
        <div className="users-list">
            <h2>Users list</h2>
            <ul>
                {users.map(user => <UserEntry key={user._id} user={user} deleteUser={deleteUser} /> )}
            </ul>
        </div>
    );
};

export default UsersList;