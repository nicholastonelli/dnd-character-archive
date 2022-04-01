import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import "./Fullpage.css"

const Fullpage = ({ character, formState, setFormState }) => {
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
    inspiration: character.inspiration
  }

  const handleChange = (event) => {
    console.log("New CLick!")
    console.log(event.target.checked)
    if (event.target.type === "number") {
      setFormState({
        ...formState,
        [event.target.id]: parseInt(event.target.value),
      })
    } else if (event.target.type === "text") {
      setFormState({ ...formState, [event.target.id]: event.target.value })
    } else if (event.target.type === "checkbox") {
      setFormState({ ...formState, [event.target.id]: (event.target.checked !== false) })
    }
    console.log(formState.inspiration)
    console.log(event.target.checked)
  }

  const [profMod, setProfMod] = useState()
  const [strMod, setStrMod] = useState()
  const [dexMod, setDexMod] = useState()
  const [conMod, setConMod] = useState()
  const [intMod, setIntMod] = useState()
  const [wisMod, setWisMod] = useState()
  const [chaMod, setChaMod] = useState()

  useEffect(() => {
    setFormState(characterState)
  }, [])

  useEffect(() => {
    setProfMod(Math.floor(2 + (formState.level - 1) / 4))
  }, [formState.level])
  useEffect(() => {
    setStrMod(Math.floor((formState.str - 10) / 2))
  }, [formState.str])
  useEffect(() => {
    setDexMod(Math.floor((formState.dex - 10) / 2))
  }, [formState.dex])
  useEffect(() => {
    setConMod(Math.floor((formState.con - 10) / 2))
  }, [formState.con])
  useEffect(() => {
    setIntMod(Math.floor((formState.int - 10) / 2))
  }, [formState.int])
  useEffect(() => {
    setWisMod(Math.floor((formState.wis - 10) / 2))
  }, [formState.wis])
  useEffect(() => {
    setChaMod(Math.floor((formState.cha - 10) / 2))
  }, [formState.cha])

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
          <p>Proficiency Modifier: + {profMod}</p>
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
      <div className="abilitiesBar">
        <p>Abilities</p>
        <div className="str">
          <label for="level">STR: </label>
          <input
            id="str"
            type="number"
            onChange={handleChange}
            defaultValue={formState.str}
          />
          <p>
            {strMod >= 0 ? "+" : ""}
            {strMod}
          </p>
        </div>
        <div className="dex">
          <label for="dex">DEX: </label>
          <input
            id="dex"
            type="number"
            onChange={handleChange}
            defaultValue={formState.dex}
          />
          <p>
            {dexMod >= 0 ? "+" : ""}
            {dexMod}
          </p>
        </div>
        <div className="con">
          <label for="con">CON: </label>
          <input
            id="con"
            type="number"
            onChange={handleChange}
            defaultValue={formState.con}
          />
          <p>
            {conMod >= 0 ? "+" : ""}
            {conMod}
          </p>
        </div>
        <div className="int">
          <label for="int">INT: </label>
          <input
            id="int"
            type="number"
            onChange={handleChange}
            defaultValue={formState.int}
          />
          <p>
            {intMod >= 0 ? "+" : ""}
            {intMod}
          </p>
        </div>
        <div className="wis">
          <label for="wis">WIS: </label>
          <input
            id="wis"
            type="number"
            onChange={handleChange}
            defaultValue={formState.wis}
          />
          <p>
            {wisMod >= 0 ? "+" : ""}
            {wisMod}
          </p>
        </div>
        <div className="cha">
          <label for="cha">CHA: </label>
          <input
            id="cha"
            type="number"
            onChange={handleChange}
            defaultValue={formState.cha}
          />
          <p>
            {chaMod >= 0 ? "+" : ""}
            {chaMod}
          </p>
        </div>
      </div>
      <div className="inspBar">
        <p>Inspiration</p>
        <input
          id="inspiration"
          type="checkbox"
          onChange={handleChange}
          defaultChecked={formState.inspiration}
        />
      </div>
    </div>
  )
}

export default Fullpage
