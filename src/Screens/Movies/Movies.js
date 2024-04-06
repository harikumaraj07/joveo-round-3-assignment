import { useMemo } from "react";
import { useMovieSearch } from "../../hooks/useMovieSearch"
import { MovieSearch } from "./MoviesSearch"
import { MovieCard } from "../../Components/MovieCard/MovieCard";
import "./Movies.css"

export const Movies = () => {

    const {
        page,
        previous,
        next,
        search,
        loading,
        setSearch,
        onSearch,
        movies
    } = useMovieSearch();

    const renderMovies = useMemo(() => {
        if (search.length < 3) {
            return (
                <div>Enter atleast 3 characters</div>
            )
        }
        return (
            <div className="movie-list">
                {
                    movies.map(({id, poster_path,
                        original_title,
                        overview}) => (
                        <MovieCard key={id} name={original_title} image={poster_path} overview={overview}/>
                        ))
                }
            </div>
        )
    }, [search, movies])

    const renderPaginagtion = useMemo(() => {
        return (
            <div style={{display: "flex", flexDirection: "row"}}>
                <button onClick={previous}>Previous</button>
                <p>{page}</p>
                <button onClick={next}>Next</button>
            </div>
        )
    }, [previous, next, page])

    return (
        <div>
            <MovieSearch value = {search} onChange={onSearch}/>
            <div>
                {renderMovies}
                {renderPaginagtion}
            </div>
        </div>
    )
}