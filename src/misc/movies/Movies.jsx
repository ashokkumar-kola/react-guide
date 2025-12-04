import React, { useEffect, useState } from 'react'
import Search from './components/Search'

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_OPTIONS = {
    method: 'GET',
    headers: {
        // 'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    },
}

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState('')
    // const [movies, setMovies] = useState([])
    // const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchMovies = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/movie/popular`, API_OPTIONS)
        } catch(err) {
            console.error('Error fetching movies:', err)
            setError('Failed to fetch movies. Please try again later.')
        }
    }

    useEffect(() => {

    }, []);
  return (
    <main>
        <div className="pattern" />

        <div className="wrapper">
            <header>
                <img src="" alt="Hero Banner" />
                <h1>
                    Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle
                </h1>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </header>
        </div>

        <section className='all-movies'>
            <h2>All Movies</h2>

            { error && <p className="error-message">{error}</p> }
        </section>
        
    </main>
  )
}

export default Movies