# Youtube Search Clone

## Installation

- CRA

```
npx create-react-app youtube-search-clone --template typescript
```

- TailwindCSS v3.0.24

```
https://tailwindcss.com/docs/guides/create-react-app
```

- SASS & heroicons

```
npm install sass @heroicons/react
```

- React-Router-Dom

```
npm install react-router-dom
```

- React-Infinite-Scroller

```
npm install react-infinite-scroller
```

## RoadMap

1. Create Youtube UI (as similar as possible)
2. Handle search query (use react-router-dom@v6)
3. Fetch search result from Youtube Data API (also get nextPageToken)
4. Load data with 4 videos each page (implement with Infinite Scroll)

## Layout Structure

- Header (fixed)
  - Logo / **Searchbar** / Profile
- Div
  - Sidebar
  - **Search Results** (Video)

## Search Functionality

I have come up of 4 different ways to implement search and fetch, and I chose `react-router` as my approach. 

1. State lifting
2. useContext
3. @reduxjs/toolkit + react-redux
4. **react-router**

The query will be displayed in the address bar like `https://localhost?query=XXX`, and the `<Results>` component will detect the change in `useLocation()` and start fetching new query results.

This approach has some advantages. First, we don't need to handle the query in any kind of state. Secondly, we can easily search for videos from URLs.

## Fetch Results (with Infinite Scroll)

After we extract the `query` from `useLocation()`, we can use [[Youtube Data API - search: list]](https://developers.google.com/youtube/v3/docs/search/list) to start our search. There are two scenarios we will fetch the API:

1. When `useEffect()` detects the change of query from `useLocation()`, it will reset the result and get the new result if the old query result already exists.
2. When we scroll to the bottom of the page, we will use `nextPageToken` to query new results and append to the existing ones. We use [React-Infinite-Scroller](https://github.com/danbovey/react-infinite-scroller) to implement scroll detection.
