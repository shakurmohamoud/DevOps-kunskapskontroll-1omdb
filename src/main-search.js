import { searchMovies } from "./api-service.js";
import { SearchModel } from "./search-model.js";
import {
  renderMovies,
  showResultInfo,
  clearResultInfo,
  showLoading,
  showError,
} from "./search-view.js";

let model = new SearchModel();

let form = document.getElementById("search-form");
let searchInput = document.getElementById("search-input");
let typeFilterEl = document.getElementById("type-filter");
let yearEl = document.getElementById("year-filter");

async function handleSearch(e) {
  e.preventDefault();

  let query = searchInput.value.trim();
  if (!query) return;

  model.setSearchQuery(query);
  model.setTypeFilter(typeFilterEl.value);
  model.setYear(yearEl.value);

  showLoading();
  clearResultInfo();

  try {
    let data = await searchMovies(query, model.getTypeFilter(), model.getYear());

    if (data.Response === "False") {
      model.setResults([]);
      model.setTotalResults(0);
      renderMovies([]);
      showResultInfo(0, query);
      return;
    }

    let movies = data.Search || [];

    model.setResults(movies);
    model.setTotalResults(parseInt(data.totalResults) || 0);
    renderMovies(movies);
    showResultInfo(model.getTotalResults(), query);
  } catch {
    showError("Något gick fel. Försök igen senare.");
  }
}

form.addEventListener("submit", handleSearch);
