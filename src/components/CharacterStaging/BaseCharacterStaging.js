import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"

import Homepage from "../Homepage/Homepage"
import Statblock from "../Statblock/Statblock"
import Fullpage from "../Fullpage/Fullpage"

const BaseCharacterStaging = ({ user }) => {
  console.log(user._id)
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
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
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
      .get(`${process.env.REACT_APP_backendURI}/baseCharacters/${id.id}`)
      .then((res) => {
        console.log(res.data)
        setFoundCharacter(res.data)
        console.log(res.data.abilities)
        setFormAbility(res.data.abilities)
        //setFoundCharacter({...res.data, user:user._id})
        // HERES THE PROBLEM
        //setFoundCharacter({...foundCharacter, user:user._id})
        console.log(foundCharacter)
        console.log(formAbility)
      })
  }

  function copyCharacter() {
    console.log("Saving Character")
    setFormState({...formState, user:user._id})
    console.log(user._id)
    console.log(formState)
    axios
      .post(`${process.env.REACT_APP_backendURI}/characters/`, formState)
      .then((res) => {
        console.log(res)
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
        />
        <button onClick={copyCharacter}>Copy This Charatcer</button>
      </div>
    )
  } else {
    return <div>Loading ...</div>
  }
}

export default BaseCharacterStaging
