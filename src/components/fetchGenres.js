import axios from "axios";

const fetchGenres = async () => {
    return await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=b3a999b7703140535e95baeff2e338fa&language=en-US`);
}

export default fetchGenres;