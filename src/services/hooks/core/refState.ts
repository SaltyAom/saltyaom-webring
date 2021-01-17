import { useState, useCallback } from 'react'

const useRefState = <T = any>(
    initialValue: T | null = null
): [T | null, (value: T) => void] => {
    let [value, set] = useState<T | null>(initialValue)

    let parentRef = useCallback((value) => {
        if (value) set(value)
    }, [])

    return [value, parentRef]
}

export default useRefState
