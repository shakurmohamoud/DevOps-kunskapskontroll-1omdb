import { describe, test, expect, beforeEach } from "vitest";
import { SearchModel } from "../../src/search-model.js";

describe("SearchModel", () => {
  let model;

  beforeEach(() => {
    model = new SearchModel();
  });

  test("getResults returns empty array by default", () => {
    expect(model.getResults()).toEqual([]);
  });

  test("setResults and getResults stores and returns results", () => {
    model.setResults([{ Title: "Inception" }]);
    expect(model.getResults()).toEqual([{ Title: "Inception" }]);
  });

  test("getTotalResults returns 0 by default", () => {
    expect(model.getTotalResults()).toBe(0);
  });

  test("setTotalResults and getTotalResults tracks count", () => {
    model.setTotalResults(42);
    expect(model.getTotalResults()).toBe(42);
  });

  test("getSearchQuery returns empty string by default", () => {
    expect(model.getSearchQuery()).toBe("");
  });

  test("setSearchQuery and getSearchQuery tracks query", () => {
    model.setSearchQuery("batman");
    expect(model.getSearchQuery()).toBe("batman");
  });

  test("getTypeFilter returns empty string by default", () => {
    expect(model.getTypeFilter()).toBe("");
  });

  test("setTypeFilter and getTypeFilter tracks type", () => {
    model.setTypeFilter("movie");
    expect(model.getTypeFilter()).toBe("movie");
  });

  test("getYear returns empty string by default", () => {
    expect(model.getYear()).toBe("");
  });

  test("setYear and getYear tracks year", () => {
    model.setYear("2020");
    expect(model.getYear()).toBe("2020");
  });

  test("reset clears all state", () => {
    model.setResults([{ Title: "Inception" }]);
    model.setTotalResults(10);
    model.setSearchQuery("batman");
    model.setTypeFilter("movie");
    model.setYear("2020");
    model.reset();
    expect(model.getResults()).toEqual([]);
    expect(model.getTotalResults()).toBe(0);
    expect(model.getSearchQuery()).toBe("");
    expect(model.getTypeFilter()).toBe("");
    expect(model.getYear()).toBe("");
  });
});