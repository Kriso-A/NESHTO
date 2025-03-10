const API_KEY = '25afacdd7d9acf12478bb0c74e5d129a';

document.addEventListener('DOMContentLoaded', fetchTopTenMovies);

function fetchTopTenMovies() {
   fetch('https://api.themoviedb.org/3/search/movies?api_key=${API_KEY}&query=&{title}')
   .then(respone => respone.json())
   .then (data => {
       displayMovies(data.results.slite(0, 12));
   })
   .catch(error => console.error(error));
   
}
function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        let movieCard = document.createElement('div');
        movieCard.classList.add('flip', 'flip-vertical');
        movieCard.innerHTML = 
            <div class= "card">
                <div class="front">
                    <img src= "https://image.tmdb.org/t/p/w500${movie.poster_path}"class="card-img-top" alt="${movies.title}"></img>
                </div>
                <div class="back">
                    <h2>${movie.title}</h2>
                    <p>${movie.overview}</p>
                    <p>${movie.vote_average}</p>
                </div>
            </div>
        ;
        movieContainer.appendChild(movieCard);
    });
}
