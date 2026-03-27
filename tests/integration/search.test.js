import { describe, test, expect, beforeEach, vi } from "vitest";

beforeEach(() => {
  vi.resetModules();
  vi.stubGlobal("fetch", vi.fn());
  fetch.mockResolvedValue({
    ok: true,
    json: async () => ({ Response: "False" }),
  });
  document.body.innerHTML = `
    <form id="search-form">
      <div class="search-row">
        <input type="text" id="search-input" />
        <button type="submit">Sök</button>
      </div>
      <div class="filter-row">
        <select id="type-filter">
          <option value="">Alla</option>
          <option value="movie">Film</option>
          <option value="series">Serie</option>
          <option value="episode">Avsnitt</option>
        </select>
        <input type="number" id="year-filter" />
      </div>
    </form>
    <p id="result-info"></p>
    <div id="movie-list"></div>
  `;
});

describe("search results → model → view", () => {
  test("storing results in model and rendering shows movie cards", async () => {
    const { SearchModel } = await import("../../src/search-model.js");
    const { renderMovies } = await import("../../src/search-view.js");
    const model = new SearchModel();
    model.setResults([{ Title: "Inception", Year: "2010", Type: "movie", Poster: "N/A" }]);
    renderMovies(model.getResults());
    const cards = document.querySelectorAll(".movie-card");
    expect(cards.length).toBe(1);
  });

  test("renderMovies shows a placeholder message when given an empty array", async () => {
    const { renderMovies } = await import("../../src/search-view.js");
    renderMovies([]);
    const placeholder = document.querySelector(".placeholder");
    expect(placeholder).not.toBeNull();
  });

  test("showResultInfo displays the result count and search query", async () => {
    const { showResultInfo } = await import("../../src/search-view.js");
    showResultInfo(5, "batman");
    const info = document.getElementById("result-info");
    expect(info.textContent).toContain("5");
    expect(info.textContent).toContain("batman");
  });
});

