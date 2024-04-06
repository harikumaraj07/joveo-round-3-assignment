export const getMoviesService = (query, page = 0) => {

    const url = "https://api.themoviedb.org/3/search/movie?api_key=263e31d1ad0c4defa8822787e614e716&language=en-US&query=${"
    + query + "}&page=" + page + "&include_adult=true"
    return fetch(url).then(res => res.json()).then(({total_pages,
        total_results,
        page,
        results,
        id
    }) => ({
        total_pages,
        total_results,
        page,
        results,
        id
    }))
}