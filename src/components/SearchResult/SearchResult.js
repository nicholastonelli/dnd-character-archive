import React from "react"
import {Link} from "react-router-dom"

const SearchResult = ({ character }) => {
  return (
    <div>
        <Link to={`/basecharacters/${character._id}`}>
      <h1>{character.name}, {character.class} ({character.subclass}){" "}
      {character.level}</h1>
      </Link>
    </div>
  )
}

export default SearchResult
