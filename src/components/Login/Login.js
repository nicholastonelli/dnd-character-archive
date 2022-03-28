import React, { useEffect } from "react"
import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import Google from "../Google"

const Login = ({ setUser, login, message }) => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  let getUsers = async () => {
    let data = await fetch(`${process.env.REACT_APP_backendURI}/users`)
    let allUsers = await data.json()
    setUsers(allUsers)
  }

  useEffect(() => {
    getUsers()
  }, [])

  let addUsers = (user) => {
    setUsers([...users, user])
  }

  const initialState = { usernameToLogIn: "", passwordToLogIn: "" }
  const [formState, setFormState] = useState(initialState)
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmitLogIn = async (e) => {
    e.preventDefault()
    let data = await fetch(`${process.env.REACT_APP_backendURI}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        username: formState.usernameToLogIn,
        password: formState.passwordToLogIn,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
    let userData = await data.json()
    setUser(userData)
    login(userData)
    setFormState(initialState)
  }

  return (
    <div className="login-body">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

       {/*  <Signup addUsers={addUsers} />
 */}
        <div className="login">
          <form onSubmit={handleSubmitLogIn} afterSubmit={() => navigate("/characters")}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <p className="spaceLogin">{message}</p>
          {/*   <Google /> */}
            <h2 className="or">OR</h2>
            <input
              type="username"
              id="usernameToLogIn"
              name="username"
              placeholder="User Name"
              required=""
              value={formState.usernameToLogIn}
              onChange={handleChange}
            />

            <input
              type="password"
              id="passwordToLogIn"
              name="pswd"
              placeholder="Password"
              required=""
              value={formState.passwordToLogIn}
              onChange={handleChange}
            />
            <button className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
