import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Statblock from "../Statblock/Statblock"

const Userpage = ({ setFoundUser, foundUser, users, rollBonus, rollDice }) => {
  const params = useParams()
  const [userChars, setUserChars] = useState([])

  function getUser() {
    axios
      .get(`${process.env.REACT_APP_backendURI}/users/${params.userId}`)
      .then((res) => {
        //console.log(res)
        setFoundUser(res.data)
      })
  }

  function getChars() {
    axios
      .get(
        `${process.env.REACT_APP_backendURI}/characters/user/${params.userId}`
      )
      .then((res) => {
        //console.log(res.data)
        setUserChars(res.data)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    getChars()
  }, [])

  return (
    <div>
      {foundUser ? <h1>{foundUser.username}</h1> : <p>loading</p>}

      <div>
        <p>Created Characters</p>
        {userChars.map((character) => {
          return (
            <Statblock
              character={character}
              foundUser={foundUser}
              //getChars={getChars}
              setUserChars={setUserChars}
              rollDice={rollDice}
              rollBonus={rollBonus}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Userpage
