import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Userpage = ({ setFoundUser, foundUser, users }) => {
  const params = useParams()

  async function getUser() {
    await axios
      .get(`${process.env.REACT_APP_backendURI}/users/${params.userId}`)
      .then((res) => {
        console.log(res)
        setFoundUser(res.data)
      })
  }

  useEffect(() => {
    getUser()
  }, [])


  return (
    <div>
      <h1>{foundUser.username}</h1>
      <div>
        <p>Created Characters</p>
      </div>
    </div>
  )
}

export default Userpage
