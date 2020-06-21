var click = document.getElementById("click")

function loadListFilms() {
    click.innerHTML = "1"

    fetch(`http://localhost:4000/films/1`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (film) {
            var lenghtArray = film.length
            console.log(film);
            

            for (let i = 0; i < lenghtArray ; i++) {
                document.getElementById("list-user-films").innerHTML += `
                <article class="card">
                <img class="poster"
                    src="https://img.elo7.com.br/product/zoom/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg"
                    alt="" srcset="">
                <h2 align="center">${film[i].TITLE}</h2>
                <p>Ano: ${film[i].YEAR_FILM}</p>
                <p>Atores: ${film[i].ACTORS}</p>
                <p>Descrição: ${film[i].PLOT}</p>
                <p>Comentários: ${film[i].COMMENTS}</p>
                <p>Avaliação: ${film[i].AVALIATION}
            </article>`
            }

            verifyClick()
        })
}

function loadListSeries() {
    click.innerHTML = "2"

    fetch(`http://localhost:4000/series/1`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (serie) {
            var lenghtArray = serie.length
            for (let i = 0; i < lenghtArray ; i++) {
                document.getElementById("list-user-series").innerHTML += `
                <article class="card">
                <img class="poster"
                    src="https://img.elo7.com.br/product/zoom/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg"
                    alt="" srcset="">
                <h2 align="center">${serie[i].TITLE}</h2>
                <p>Ano: ${serie[i].YEAR_SERIE}</p>
                <p>Atores: ${serie[i].ACTORS}</p>
                <p>Descrição: ${serie[i].PLOT}</p>
                <p>Comentários: ${serie[i].COMMENTS}</p>
                <p>Avaliação: ${serie[i].AVALIATION}
            </article>`
            }

            verifyClick()
        })
}

function verifyClick(type) {
    var contentSpan = click.textContent
    if (contentSpan == 1) {
        document.getElementById("films-user").disabled = true;
        document.getElementById("series-user").disabled = false;
        document.getElementById("films-user").style.color = "#000" 
        document.getElementById("series-user").style.color = "#fff" 
        document.getElementById("list-user-series").innerHTML = ""
    }
    if (contentSpan == 2) {
        document.getElementById("series-user").disabled = true;
        document.getElementById("films-user").disabled = false;
        document.getElementById("series-user").style.color = "#000" 
        document.getElementById("films-user").style.color = "#fff" 
        document.getElementById("list-user-films").innerHTML = ""
    }
}

