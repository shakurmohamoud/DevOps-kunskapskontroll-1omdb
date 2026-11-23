# Filmsök

![CI](https://github.com/shakurmohamoud/DevOps-kunskapskontroll-1omdb/actions/workflows/ci.yml/badge.svg)

Movie search against the OMDb API. Search by title and narrow the
result with filters for type and year.

**Live:** https://dev-ops-kunskapskontroll-1omdb.vercel.app

## What it does

- Search for a title and get posters back with year and type
- Filter by type and by year
- Shows how many results the search gave
- Shows a loading text while it waits and an error text if the call fails

## How the code is split

Four files in `src`

- `api-service.js` talks to the OMDb API
- `search-model.js` keeps the results and the filters
- `search-view.js` draws the cards and the messages on the page
- `main-search.js` listens to the form and ties the three together

## Tests

| Kind | Folder | Tool |
|---|---|---|
| Unit | `tests/unit` | Vitest |
| Integration | `tests/integration` | Vitest |
| End to end | `tests/e2e` | Playwright |

Run them

```
npm test
npm run test:e2e
```

## CI

Every push runs the workflow in `.github/workflows/ci.yml` through
GitHub Actions. The app is deployed on Vercel.

## How to run it

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
4. Open the address that Vite prints in the terminal
