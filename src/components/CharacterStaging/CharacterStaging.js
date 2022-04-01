import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import Fullpage from "../Fullpage/Fullpage"
import { Navigate, useNavigate } from "react-router-dom"
import UploadImage from "../UploadImage/UploadImage"

import './CharacterStaging.css'

// The Character Staging Component uses Params to find a character before passing to another component

const CharacterStaging = ({ user }) => {
  const navigate = useNavigate()
  const [foundCharacter, setFoundCharacter] = useState()
  const [uploadedImageUrl, setUploadedImageUrl] = useState()

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


  const [formState, setFormState] = useState(initialState)
  let id = useParams()

  function getCharacter() {
    axios
      .get(`${process.env.REACT_APP_backendURI}/characters/${id.id}`)
      .then((res) => {
        setFoundCharacter(res.data)
      })
  }

  async function saveCharacter() {
    console.log("Saving Character")
    console.log(formState)
    let response = await fetch(
      `${process.env.REACT_APP_backendURI}/characters/${id.id}`,
      {
        method: "PUT",
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
          inspiration: formState.inspiration,
          userId: user._id,
          user: user,
          image: uploadedImageUrl,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    let character = await response.json()
    //navigate("/")
  }

  useEffect(() => {
    getCharacter()
  }, [])

  //console.log(foundCharacter)
  if (foundCharacter) {
    return (
      <div>
        {foundCharacter.image ? (
          <img src={foundCharacter.image} className="portrait" alt={foundCharacter.name}/>
        ) : null}
        <Fullpage
          character={foundCharacter}
          formState={formState}
          setFormState={setFormState}
        />
        <UploadImage
          character={foundCharacter}
          formState={formState}
          setFormState={setFormState}
          uploadedImageUrl={uploadedImageUrl}
          setUploadedImageUrl={setUploadedImageUrl}
        />
        <button onClick={saveCharacter}>Save Changes</button>
      </div>
    )
  } else {
    return <div>Loading ...</div>
  }
}

export default CharacterStaging
