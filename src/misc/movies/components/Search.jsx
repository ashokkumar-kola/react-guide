import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
        <div>
            <img src="" alt="" className="search-img" />

            <input  
                type="text" 
                className="search-input" 
                placeholder='Search your movie'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search