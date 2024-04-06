import { useState } from "react"

export const usePagination = (initialPage = 1, total_pages) => {
    const [page, setPage] = useState(initialPage);

    const next = () => {
        if (page >= total_pages) {
            return
        }
        setPage(_page => _page + 1)
    }

    const previous = () => {
        if (page <= 1) {
            return
        }
        setPage(_page => _page + 1)
    }

    const reset = () => {
        setPage(1)
    }

    return {
        page,
        next,
        previous,
        reset
    }
}