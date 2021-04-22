import React from 'react';

const Profile = ({authState}) =>
{
    return (
        <div>
            {authState.user.name}
        </div>
    )
}

export default Profile;