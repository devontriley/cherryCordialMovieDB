import axios from 'axios';

const deleteUser = async (userID) =>
{
    return await axios.delete(`http://localhost:5000/users/${userID}`);
}

export default deleteUser;