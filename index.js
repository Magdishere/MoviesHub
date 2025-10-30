let movies = [];

function ShowMovies(){

    let ddl_movies = document.getElementById('ddl_movies');
    let image = document.getElementById('div_movie_image');


    movies.forEach((m) => {
        
        let option = document.createElement('option');
        option.innerHTML = m.name;
        ddl_movies.appendChild(option);

        let image = document.createElement('img');
        image.src = m.image;
        image.className = 'MovieImage';
        div_movie_image.appendChild(image);

    });



}

function ConsumeAPIData() {
    console.log('Before calling API');
    fetch('https://api.tvmaze.com/search/shows?q=horror')
        .then((response) => response.json())
        .then((json) => {
            json.forEach((element) => {
                movies.push({
                    name: element.show.name,
                    image: element.show.image.medium,
                });
            });
        });
    console.log('After Calling API');
}
ConsumeAPIData();