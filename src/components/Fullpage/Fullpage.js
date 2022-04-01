import { useState, useEffect } from "react"

const Fullpage = ({ character, formState, setFormState, formAbility, setFormAbility }) => {
  //console.log(character)
  //console.log(formState)

  const characterState = {
    name: character.name,
    level: character.level,
    race: character.race,
    class: character.class,
    subclass: character.subclass,
    experiencePoints: character.experiencePoints,
    background: character.background,
    alignment: character.alignment,
    str: character.abilities.str,
    dex: character.abilities.dex,
    con: character.abilities.con,
    int: character.abilities.int,
    wis: character.abilities.wis,
    cha: character.abilities.cha,
  }

  const handleChange = (event) => {
    if (event.target.type === "number") {
      setFormState({
        ...formState,
        [event.target.id]: parseInt(event.target.value),
      })
    } else {
      setFormState({ ...formState, [event.target.id]: event.target.value })
    }
    console.log(event.target)
    console.log(formState)
  }

  useEffect(() => {
    setFormState(characterState)
  }, [])

  return (
    <div>
      Fullpage
      <div>
        <div class="nameBar">
          <label for="name">Character Name: </label>
          <input
            id="name"
            type="text"
            onChange={handleChange}
            defaultValue={formState.name}
          />
        </div>
        <div class="levelBar">
          <label for="level">Level: </label>
          <input
            id="level"
            type="number"
            onChange={handleChange}
            defaultValue={formState.level}
          />
        </div>
        <div className="class">
          <label for="class">Class: </label>
          <input
            id="class"
            type="text"
            onChange={handleChange}
            defaultValue={formState.class}
          />
        </div>
        <div className="experiencePoints">
          <label for="experiencePoints">EXP: </label>
          <input
            id="experiencePoints"
            type="number"
            onChange={handleChange}
            defaultValue={formState.experiencePoints}
          />
        </div>
        <div className="race">
          <label for="level">Race: </label>
          <input
            id="race"
            type="text"
            onChange={handleChange}
            defaultValue={formState.race}
          />
        </div>
        <div className="alignment">
          <label for="level">Alignment: </label>
          <input
            id="alignment"
            type="text"
            onChange={handleChange}
            defaultValue={formState.alignment}
          />
        </div>
        <div className="background">
          <label for="level">Background: </label>
          <input
            id="background"
            type="text"
            onChange={handleChange}
            defaultValue={formState.background}
          />
        </div>
      </div>
      <div className="abilities">
        <p>Abilities</p>
        <div className="str">
          <label for="level">STR: </label>
          <input
            id="str"
            type="number"
            onChange={handleChange}
            defaultValue={formAbility.str}
          />
        </div>
        <div className="dex">
          <label for="dex">DEX: </label>
          <input
            id="dex"
            type="number"
            onChange={handleChange}
            defaultValue={formAbility.dex}
          />
        </div>
      </div>
    </div>
  )
}

export default Fullpage
