import { useEffect, useState } from "react"
import { Route, Routes, Link, Navigate } from "react-router-dom"
import "./App.css"
import CharacterSheet from "./components/CharacterSheet/CharacterSheet"
import CharacterSheets from "./components/CharacterSheets"
import Navbar from "./components/Nabar/Navbar"
import axios from "axios"

import background from "./images/background.jpeg"

function App() {
  const [characters, setCharacters] = useState([])

  function getData() {
    axios.get(`${process.env.REACT_APP_backendURI}/characters`).then((res) => {
      setCharacters(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

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
      <Navbar />
      <Routes>
        <Route path="/characters" element={<CharacterSheets characters={characters} />}/>
      </Routes>
    </div>
  )
}

export default App
