import { useEffect, useState } from "react"
import { Route, Routes, Link, Navigate } from "react-router-dom"
import "./App.css"
import CharacterSheet from "./components/CharacterSheet/CharacterSheet"
import CharacterSheets from "./components/CharacterSheets"
import Navbar from "./components/Nabar/Navbar"
import Chatbar from "./components/Chatbar/Chatbar"
import axios from "axios"

import background from "./images/background.jpeg"
import Login from "./components/Login/Login"
import Homepage from "./components/Homepage/Homepage"
import Userpage from "./components/Userpage/Userpage"
import Register from "./components/Register/Register"

function App() {
  const [characters, setCharacters] = useState([])

  const [user, setUser] = useState()
  const [message, setMessage] = useState("")
  const [users, setUsers] = useState()
  const [foundUser, setFoundUser] = useState()

  function getData() {
    axios.get(`${process.env.REACT_APP_backendURI}/characters`).then((res) => {
      setCharacters(res.data)
    })
    axios.get(`${process.env.REACT_APP_backendURI}/users`).then((res) => {
      setUsers(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const login = (user) => {
    if (user && user.username !== undefined) {
      setUser(user)
      setMessage(`Log in Success`)
    } else {
      setMessage(`Wrong username or password`)
    }
  }

  let addUsers = (user) => {
	  setUsers([...users,user])
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize:'cover',
        backgroundRepeat: "no-repeat",
        width: '100vw',
        height: '100vh'
        
      }}
    >
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/characters" element={<CharacterSheets characters={characters} />}/>
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to={`/user/${user._id}`} />
            ) : (
              <Login setUser={setUser} login={login} message={message} />
            )
          }
        />
        <Route path="/user/:userId" element={<Userpage setFoundUser={setFoundUser}
              foundUser={foundUser}
              users={users}/>}/>
        <Route path="/register" element={<Register addUsers={addUsers}/>}/>
      </Routes>
      <Chatbar />
    </div>
  )
}

export default App
