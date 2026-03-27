let movieList = document.getElementById("movie-list");
let resultInfo = document.getElementById("result-info");

export function renderMovies(movies) {
  movieList.innerHTML = "";

  if (movies.length === 0) {
    let p = document.createElement("p");
    p.className = "placeholder";
    p.textContent = "Inga resultat hittades";
    movieList.appendChild(p);
    return;
  }

  movies.forEach((movie) => {
    let div = document.createElement("div");
    div.className = "movie-card";

    let img = document.createElement("img");
    img.src = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/180x260?text=Ingen+bild";
    img.alt = movie.Title;

    let info = document.createElement("div");
    info.className = "info";

    let h3 = document.createElement("h3");
    h3.textContent = movie.Title;

    let meta = document.createElement("span");
    meta.className = "meta";
    meta.textContent = movie.Year + " · " + movie.Type;

    info.append(h3, meta);
    div.append(img, info);
    movieList.appendChild(div);
  });
}

export function showResultInfo(count, query) {
  resultInfo.textContent = count + " resultat för \"" + query + "\"";
}

export function clearResultInfo() {
  resultInfo.textContent = "";
}

export function showLoading() {
  movieList.innerHTML = '<p class="loading">Söker…</p>';
}

export function showError(message) {
  movieList.innerHTML = '<p class="error">' + message + "</p>";
}
