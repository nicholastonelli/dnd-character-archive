import { useEffect, useState } from "react"
import "./App.css"
import CharacterSheet from "./components/CharacterSheet"
import CharacterSheets from "./components/CharacterSheets"
import Navbar from "./components/Navbar"
import axios from "axios"

function App() {
  const [characters, setCharacters] = useState([])

  function getData() {
    axios.get(`${process.env.REACT_APP_backendURI}posts`).then((res) => {
      setCharacters(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <CharacterSheets characters={characters} />
      <CharacterSheet />
      dnd character application
    </div>
  )
}

export default App
