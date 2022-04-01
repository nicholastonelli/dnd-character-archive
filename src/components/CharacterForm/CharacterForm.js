import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const CharacterForm = ({ user, setBaseCharacters, baseCharacters }) => {
  const navigate = useNavigate()

  const initialState = {
    name: "",
    level: "",
    race: "",
    class: "",
    subclass: "",
    experiencePoints: "",
    background: "",
    alignment: "",
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
  }

  const [formState, setFormState] = useState(initialState)


    const [strMod, setStrMod] = useState() 
    const [dexMod, setDexMod] = useState() 
    const [conMod, setConMod] = useState() 
    const [intMod, setIntMod] = useState() 
    const [wisMod, setWisMod] = useState() 
    const [chaMod, setChaMod] = useState() 
  

  let handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formState)
    let response = await fetch(
      `${process.env.REACT_APP_backendURI}/characters`,
      {
        method: "POST",
        body: JSON.stringify({
          name: formState.name,
          class: formState.class,
          level: formState.level,
          subclass: formState.subclass,
          race: formState.race,
          alignment: formState.alignment,
          experiencePoints: formState.experiencePoints,
          background: formState.background,
          abilities: {
            str: formState.str,
            dex: formState.dex,
            con: formState.con,
            int: formState.int,
            wis: formState.wis,
            cha: formState.cha,
          },
          userId: user._id,
          user: user,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    let character = await response.json()
    let baseResponse = await fetch(
      `${process.env.REACT_APP_backendURI}/baseCharacters`,
      {
        method: "POST",
        body: JSON.stringify({
          name: formState.name,
          class: formState.class,
          level: formState.level,
          subclass: formState.subclass,
          race: formState.race,
          alignment: formState.alignment,
          experiencePoints: formState.experiencePoints,
          background: formState.background,
          abilities: {
            str: formState.str,
            dex: formState.dex,
            con: formState.con,
            int: formState.int,
            wis: formState.wis,
            cha: formState.cha,
          },
          userId: user._id,
          user: user,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    let baseCharacter = await baseResponse.json()
    setBaseCharacters(...baseCharacters, baseCharacter)
    setFormState("")
    navigate("/")
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  useEffect(()=>{
    setStrMod(Math.floor((formState.str-10)/2))
  }, [formState.str])
  useEffect(()=>{
    setDexMod(Math.floor((formState.dex-10)/2))
  }, [formState.dex])
  useEffect(()=>{
    setConMod(Math.floor((formState.con-10)/2))
  }, [formState.con])
  useEffect(()=>{
    setIntMod(Math.floor((formState.int-10)/2))
  }, [formState.int])
  useEffect(()=>{
    setWisMod(Math.floor((formState.wis-10)/2))
  }, [formState.wis])
  useEffect(()=>{
    setChaMod(Math.floor((formState.cha-10)/2))
  }, [formState.cha])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="name">Character Name</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          defaultValue={formState.name}
        />
      </div>
      <div>
        <label for="class">Class</label>
        <input
          id="class"
          onChange={handleChange}
          defaultValue={formState.class}
        />
        <label for="level">Level</label>
        <input
          id="level"
          onChange={handleChange}
          defaultValue={formState.level}
        />
        <label for="subclass">Subclass</label>
        <input
          id="subclass"
          onChange={handleChange}
          defaultValue={formState.subclass}
        />
        <label for="race">Race</label>
        <input
          id="race"
          onChange={handleChange}
          defaultValue={formState.race}
        />
        <label for="alignment">Alignment</label>
        <input
          id="alignment"
          onChange={handleChange}
          defaultValue={formState.alignment}
        />
        <label for="background">Background</label>
        <input
          id="background"
          onChange={handleChange}
          defaultValue={formState.background}
        />
      </div>
      <div className="abilities">
        <div className="strScore">
          <label for="str">Strength</label>
          <input
            id="str"
            type="number"
            onChange={handleChange}
            defaultValue={formState.str}
          />
          <p>{(strMod >= 0 ? "+" : "")}{strMod}</p>
        </div>
        <div className="dexScore">
          <label for="dex">Dexterity</label>
          <input
            id="dex"
            type="number"
            onChange={handleChange}
            defaultValue={formState.dex}
          />
          <p>{(dexMod >= 0 ? "+" : "")}{dexMod}</p>
        </div>
        <div className="conScore">
          <label for="con">Constitution</label>
          <input
            id="con"
            type="number"
            onChange={handleChange}
            defaultValue={formState.con}
          />
          <p>{(conMod >= 0 ? "+" : "")}{conMod}</p>
        </div>
        <div className="intScore">
          <label for="int">Intelligence</label>
          <input
            id="int"
            type="number"
            onChange={handleChange}
            defaultValue={formState.int}
          />
          <p>{(intMod >= 0 ? "+" : "")}{intMod}</p>
        </div>
        <div className="wisScore">
          <label for="wis">Wisdom</label>
          <input
            id="wis"
            type="number"
            onChange={handleChange}
            defaultValue={formState.wis}
          />
          <p>{(wisMod >= 0 ? "+" : "")}{wisMod}</p>
        </div>
        <div className="chaScore">
          <label for="cha">Charisma</label>
          <input
            id="cha"
            type="number"
            onChange={handleChange}
            defaultValue={formState.cha}
          />
          <p>{(chaMod >= 0 ? "+" : "")}{chaMod}</p>
        </div>
      </div>
      <button type="submit" value="POST">
        Save Character
      </button>
    </form>
  )
}

export default CharacterForm
