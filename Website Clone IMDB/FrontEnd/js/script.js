$.ajax({
    movies:[{}],
    url: "http://www.omdbapi.com/?apikey=929c59ff&t=transformer",
    success: (movies) =>{
        console.log(movies)
        return movies
    },
    error: () => {
        alert("Movie not found")
    }
});