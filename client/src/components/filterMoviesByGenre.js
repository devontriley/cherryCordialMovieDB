const filterMoviesByGenre = (movies, genre) =>
{
    let genreInt = parseInt(genre);

    let filteredResults = movies.filter(function(movie)
    {
        return movie.genre_ids.indexOf(genreInt) > -1;
    });

    return filteredResults;
}

export default filterMoviesByGenre;