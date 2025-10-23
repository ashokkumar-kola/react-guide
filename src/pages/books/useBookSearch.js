import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useBookSearch(query, pageNumber) {
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setBooks([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios.get('http://openlibrary.org/search.json', {
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setBooks(prevBooks => {
                return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
            })
            setHasMore(res.data.docs.length > 0)
            setLoading(false)
            console.log(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pageNumber])
    return { books, hasMore, loading, error }
}