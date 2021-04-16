import axios from 'axios';

const fetchCast = async (movieID) =>
{
    return await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=b3a999b7703140535e95baeff2e338fa`);
}

export default fetchCast;