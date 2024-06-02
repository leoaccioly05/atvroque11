document.getElementById('searchButton').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value;
    fetch('http://www.omdbapi.com/?s=' + searchInput + '&apikey=c377be2c')
        .then(response => response.json())
        .then(data => {
            var resultArea = document.getElementById('resultArea');
            resultArea.innerHTML = '';
            data.Search.forEach(movie => {
                resultArea.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <p class="card-text">${movie.Year}</p>
                        </div>
                    </div>
                `;
            });
        });
});
