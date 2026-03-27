const API_KEY = "trilogy";
const BASE_URL = "https://www.omdbapi.com";

export async function searchMovies(query, type, year) {
  let url = BASE_URL + "/?apikey=" + API_KEY + "&s=" + query;

  if (type) {
    url += "&type=" + type;
  }
  if (year) {
    url += "&y=" + year;
  }

  let res = await fetch(url);
  if (!res.ok) throw new Error("Nätverksfel vid sökning");
  return await res.json();
}

export async function fetchMovieDetails(imdbId) {
  let url = BASE_URL + "/?apikey=" + API_KEY + "&i=" + imdbId + "&plot=full";

  let res = await fetch(url);
  if (!res.ok) throw new Error("Nätverksfel vid hämtning av detaljer");
  return await res.json();
}

