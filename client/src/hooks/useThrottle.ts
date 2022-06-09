import { useCallback, useRef } from "react"

export const useThrottle = <T extends any []>(callback: (...args: T) => Promise<boolean>, delay: number) => {
    const isThrottled = useRef<null | boolean>(null)

    return useCallback((...args: Parameters<typeof callback>) => {
        if (isThrottled.current) {
            return
        }

        callback(...args)

        isThrottled.current = true

        setTimeout(() => isThrottled.current = false, delay)
    }, [])
}