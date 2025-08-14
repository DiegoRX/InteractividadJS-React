import { useState, useEffect } from "react";

export const useFetch = (url) => {
    console.log(url)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const controller = new AbortController()

        async function fetchData() {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(url, { signal: controller.signal })
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }
                const json = await response.json();
                setData(json)
                console.log('data------------', json)
            } catch (e) {
                if (e.name !== 'AbortError') {
                    setError(e)
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        fetchData()

        return () => {
            controller.abort()
        }
    }, [url])

    return {
        data,
        loading,
        error
    }
}