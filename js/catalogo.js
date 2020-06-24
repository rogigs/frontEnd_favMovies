var clickCatalog = document.getElementById("click-catalog")
const API_KEY = "bcea0923"

function loadListFilms() {
    clickCatalog.innerHTML = "1"

    let lista = []
    for (let i = 0; i < 9; i++) {
        lista.push(Math.floor(Math.random() * 900) + 100)
    }


    for (let i = 0; i < 9; i++) {
        fetch(`http://www.omdbapi.com/?i=tt0369${lista[i]}&apikey=bcea0923`, {
            method: 'GET',
            header: {
                "Content-Type": "application/json; charset=utf-8",
                "x-rapidapi-key": API_KEY
            },
        })
            .then(function (response) {

                return response.json()
            })
            .then(function (show) {
                let title = show.Title === undefined ? "Sem informações" : show.Title
                let year = show.Year === undefined ? "Sem informações" : show.Year
                let actors = show.Actors === undefined ? "Sem informações" : show.Actors
                let plot = show.Plot === undefined ? "Sem informações" : show.Plot

                document.getElementById("list-catalog-films").innerHTML += `
                    <article class="card">
                    <img class="poster"
                        src="${show.Poster}" alt="POSTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    >
                    <h2 align="center">${title}</h2>
                    <p>Ano: ${year}</p>
                    <p>Atores: ${actors}</p>
                    <p>Descrição: ${plot}</p>
                </article>`

                verifyClick()
            })
    }
}

function loadListSeries() {
    clickCatalog.innerHTML = "2"

    let lista = []
    for (let i = 0; i < 9; i++) {
        lista.push(Math.floor(Math.random() * 900) + 100)
    }


    for (let i = 0; i < 9; i++) {
        fetch(`http://www.omdbapi.com/?i=tt4154${lista[i]}&apikey=bcea0923`, {
            method: 'GET',
            header: {
                "Content-Type": "application/json; charset=utf-8",
                "x-rapidapi-key": API_KEY
            },
        })
            .then(function (response) {

                return response.json()
            })
            .then(function (movie) {
                let title = movie.Title === undefined ? "Sem informações" : movie.Title
                let year = movie.Year === undefined ? "Sem informações" : movie.Year
                let actors = movie.Actors === undefined ? "Sem informações" : movie.Actors
                let plot = movie.Plot === undefined ? "Sem informações" : movie.Plot

                document.getElementById("list-catalog-series").innerHTML += `
                    <article class="card">
                    <img class="poster"
                        src="${movie.Poster}" alt="POSTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    >
                    <h2 align="center">${title}</h2>
                    <p>Ano: ${year}</p>
                    <p>Atores: ${actors}</p>
                    <p>Descrição: ${plot}</p>
                </article>`

                verifyClick()
            })
    }
}

function verifyClick() {
    var contentSpan = clickCatalog.textContent
    if (contentSpan == 1) {
        document.getElementById("films-catalog").disabled = true;
        document.getElementById("series-catalog").disabled = false;
        document.getElementById("films-catalog").style.color = "#000"
        document.getElementById("series-catalog").style.color = "#fff"
        document.getElementById("list-catalog-series").innerHTML = ""
    }
    if (contentSpan == 2) {
        document.getElementById("series-catalog").disabled = true;
        document.getElementById("films-catalog").disabled = false;
        document.getElementById("series-catalog").style.color = "#000"
        document.getElementById("films-catalog").style.color = "#fff"
        document.getElementById("list-catalog-films").innerHTML = ""
    }
}

window.onload = () => {
    loadListFilms()
}
