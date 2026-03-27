export class SearchModel {
  constructor() {
    this.results = [];
    this.totalResults = 0;
    this.searchQuery = "";
    this.typeFilter = "";
    this.year = "";
  }

  setResults(data) {
    this.results = data;
  }

  getResults() {
    return this.results;
  }

  setTotalResults(count) {
    this.totalResults = count;
  }

  getTotalResults() {
    return this.totalResults;
  }

  setSearchQuery(query) {
    this.searchQuery = query;
  }

  getSearchQuery() {
    return this.searchQuery;
  }

  setTypeFilter(type) {
    this.typeFilter = type;
  }

  getTypeFilter() {
    return this.typeFilter;
  }

  setYear(y) {
    this.year = y;
  }

  getYear() {
    return this.year;
  }

  reset() {
    this.results = [];
    this.totalResults = 0;
    this.searchQuery = "";
    this.typeFilter = "";
    this.year = "";
  }
}
