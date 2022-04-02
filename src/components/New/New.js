import React from "react"
import CharacterForm from "../CharacterForm/CharacterForm"
import CharacterSheet from "../CharacterSheet/CharacterSheet"
import NewCharacterStaging from "../NewCharacterStaging/NewCharacterStaging"
import Fullpage from "../Fullpage/Fullpage"

const New = ({ user, setBaseCharacters, baseCharacters }) => {



  return (
    <div>
      <CharacterForm user={user} setBaseCharacters={setBaseCharacters} baseCharacters={baseCharacters}/>
      {/* <NewCharacterStaging /> */}
    </div>
  )
}

export default New
