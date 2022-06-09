import { useRef, useCallback } from 'react'

export const useDebounce = <T extends any[]>(request: (...args: T) => Promise<boolean>, delay: number) => {
    const timer = useRef<null | NodeJS.Timeout>(null)

    return useCallback((...args: Parameters<typeof request>) => {
        if(timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(async () => request(...args), delay)
    }, [request, delay])
}