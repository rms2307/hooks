import { useEffect, useState } from "react";

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    const future = Date.now() + 2000
    while (Date.now() < future) { } // espera 2s

    useEffect(function () {
        fetch(url, { method })
            .then(resp => resp.json())
            .then(json => setResponse({
                data: json,
                loading: false
            }))
    }, [url, method])

    return response
}