import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const CharacterForm = ({ user }) => {
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
    console.log(character)
    setFormState("")
    navigate("/")
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
    
    console.log(event.target)
    console.log(formState)
  }

  useEffect(()=>{
    setStrMod(Math.floor((formState.str-10)/2))
  }, [formState.str])

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
        <div>
          <label for="str">Strength</label>
          <input
            id="str"
            type="number"
            onChange={handleChange}
            defaultValue={formState.str}
          />
          <p>+ {strMod}</p>
        </div>
      </div>
      <button type="submit" value="POST">
        Save Character
      </button>
    </form>
  )
}

export default CharacterForm
