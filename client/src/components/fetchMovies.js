import axios from 'axios';

const fetchMovies = (searchTerm) =>
{
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b3a999b7703140535e95baeff2e338fa&query=${searchTerm}`)
        .then(res => {
            let results = res.data.results.sort((a,b) =>
                {
                    let dateA = new Date(a.release_date);
                    let dateB = new Date(b.release_date);

                    return dateB.getTime() - dateA.getTime()
                });

            return results;
        });
}

export default fetchMovies;