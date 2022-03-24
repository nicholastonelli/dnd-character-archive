import CharacterSheet from "./CharacterSheet"

const CharacterSheets = ({ characters }) => {
  return <div>CharacterSheets
    { characters.map( character =>{
      return <CharacterSheet character={character} key={character._id}/>
    })}
  </div>
}

export default CharacterSheets
