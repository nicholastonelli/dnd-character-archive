import React from 'react'
import SearchResult from '../SearchResult/SearchResult'

const SearchResults = ({characters}) => {
  return (
    <div>
        {characters.map((character)=>{
            return <SearchResult character={character} key={character._id} />
        })}
    </div>
  )
}

export default SearchResults