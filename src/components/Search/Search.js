import React from "react"
import { useState, useEffect } from "react"
import SearchResults from "../SearchResults/SearchResults"

export const Search = ({ baseCharacters }) => {
  const [query, setQuery] = useState("")

  function search(characters) {
    return characters.filter(
      (character) =>
        character.class.toLowerCase().includes(query) ||
        character.name.toLowerCase().includes(query) ||
        character.subclass.toLowerCase().includes(query) ||
        character.level === Number(query)
    )
  }

  return (
    <div>
      <h1> Search for a Character</h1>
      <p>You can search by class, subclass, character name, or level</p>
      <input
        className="searchBar"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <SearchResults characters={search(baseCharacters)} />
    </div>
  )
}
