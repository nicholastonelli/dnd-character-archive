import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"

import Homepage from "../Homepage/Homepage"
import Statblock from "../Statblock/Statblock"

const BaseCharacterStaging = () => {
  const [foundCharacter, setFoundCharacter] = useState()
  let id = useParams()

  function getCharacter() {
    axios
      .get(`${process.env.REACT_APP_backendURI}/baseCharacters/${id.id}`)
      .then((res) => {
        setFoundCharacter(res.data)
      })
  }

  useEffect(() => {
    getCharacter()
  }, [])

  console.log(foundCharacter)
  if (foundCharacter) {
    return (
      <div>
         <Statblock character={foundCharacter}/>
      </div>
    )
  } else {
    return <div>Loading ...</div>
  }
}

export default BaseCharacterStaging
