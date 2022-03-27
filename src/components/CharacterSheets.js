import { useState,useEffect } from 'react/cjs/react.development';
import CharacterSheet from "./CharacterSheet/CharacterSheet"

const CharacterSheets = ({ characters }) => {
  console.log(characters)
  return (
    <div>

      {characters.map((character) => {
          return <CharacterSheet character={character} key={character._id}/>
      })}
    </div>
  )
}

export default CharacterSheets
