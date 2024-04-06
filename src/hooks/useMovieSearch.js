import { useCallback, useState } from "react";
import { usePagination } from "./usePagination";
import {useDebounce} from "./useDebounce"
import {getMoviesService} from "../Services/GetMovies";

export const useMovieSearch = () => {
    const {page, next, previous, reset} = usePagination();
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);

    const [loading, setLoading] = useState(false);

    const apiCall = useCallback((search, pageNo) => {
        setLoading(true);
        getMoviesService(search, pageNo)
        .then(res => {
            setMovies(res.results)
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    const memoisedCallback = useDebounce(apiCall);

    const handleNextPage = () => {
        if (!loading) {
            apiCall(searchValue, page + 1);
            next();
        }
    }

    const handlePreviousPage = () => {
        if (!loading) {
            apiCall(searchValue, page - 1);
            previous();
        }
    }

    const handleSearchChange = (value) => {
        setSearchValue(value);
        setMovies([]);
        reset();
        if (value.length > 2) {
            memoisedCallback(value, 1);
        }
    }

    return (
        {
            page,
            previous: handlePreviousPage,
            next: handleNextPage,
            search: searchValue,
            loading,
            onSearch: handleSearchChange,
            movies
        }
    )
}