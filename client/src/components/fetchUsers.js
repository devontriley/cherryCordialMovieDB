import axios from 'axios';

const createUser = async () =>
{
    return await axios.get(`http://localhost:5000/users`);
}

export default createUser;