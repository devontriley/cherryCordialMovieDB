import axios from 'axios';

const fetchMovies = (searchTerm) =>
{
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b3a999b7703140535e95baeff2e338fa&query=${searchTerm}&sort`)
        .then(res => {
            return res.data.results;
        });
}

export default fetchMovies;