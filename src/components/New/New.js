import React from "react"
import CharacterForm from "../CharacterForm/CharacterForm"
import CharacterSheet from "../CharacterSheet/CharacterSheet"

const New = ({ user }) => {
  return (
    <div>
      <CharacterForm user={user}/>
    </div>
  )
}

export default New
