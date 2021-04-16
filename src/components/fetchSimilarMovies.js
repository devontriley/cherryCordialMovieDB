import axios from "axios";

const fetchSimilarMovies = (movie) =>
{
    return axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=b3a999b7703140535e95baeff2e338fa`)
        .then(res => {
            return res.data.results;
        });
}

export default fetchSimilarMovies;