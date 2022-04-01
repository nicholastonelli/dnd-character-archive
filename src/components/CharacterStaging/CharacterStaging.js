import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import Fullpage from "../Fullpage/Fullpage"
import { Navigate, useNavigate } from "react-router-dom"

// The Character Staging Component uses Params to find a character before passing to another component

const CharacterStaging = ({ user }) => {
  const navigate = useNavigate()
  const [foundCharacter, setFoundCharacter] = useState()

  const initialState = {
    name: "",
    level: "",
    race: "",
    class: "",
    subclass: "",
    experiencePoints: "",
    background: "",
    alignment: "",
  }

  const initialAbility = {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
  }

  const [formAbility, setFormAbility] = useState(initialAbility)
  const [formState, setFormState] = useState(initialState)
  

  let id = useParams()

  function getCharacter() {
    axios
      .get(`${process.env.REACT_APP_backendURI}/characters/${id.id}`)
      .then((res) => {
        setFoundCharacter(res.data)
        console.log(res.data.abilities)
        setFormAbility(res.data.abilities)
        console.log(formAbility)
      })
  }

  function saveCharacter() {
    setFormState(formAbility)
    console.log("Saving Character")
    console.log(formState)
    axios
      .put(`${process.env.REACT_APP_backendURI}/characters/${id.id}`, formState)
      .then((res) => {
        //console.log(res)
      })
    navigate("/")
  }

  useEffect(() => {
    getCharacter()
  }, [])

  console.log(foundCharacter)
  if (foundCharacter) {
    return (
      <div>
        <Fullpage
          character={foundCharacter}
          formState={formState}
          setFormState={setFormState}
          formAbility={formAbility}
          setFormAbility={setFormAbility}
        />
        <button onClick={saveCharacter}>Save Changes</button>
      </div>
    )
  } else {
    return <div>Loading ...</div>
  }
}

export default CharacterStaging
