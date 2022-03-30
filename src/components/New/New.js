import React from "react"
import CharacterForm from "../CharacterForm/CharacterForm"
import CharacterSheet from "../CharacterSheet/CharacterSheet"

const New = ({ user, setBaseCharacters, baseCharacters }) => {
  return (
    <div>
      <CharacterForm user={user} setBaseCharacters={setBaseCharacters} baseCharacters={baseCharacters}/>
    </div>
  )
}

export default New
