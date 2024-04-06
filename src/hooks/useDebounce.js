import { useCallback, useRef } from "react"

export const useDebounce = (callback, delay = 300) => {
    const timerRef = useRef(null);

    const memoisedCallback = useCallback(
        (...args) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => {
                callback(...args)
            }, delay);
        }, [callback, delay]
    )

    return memoisedCallback
}