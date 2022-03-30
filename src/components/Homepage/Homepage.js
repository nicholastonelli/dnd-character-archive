import React from "react"
import "./Homepage.css"

const Homepage = () => {
  return (
    <div>
      <h1>D&D 5e Character Archive</h1>
      <p>
        Welcome to the D&D5e Character Archive! Use this tool to make and save
        5e characters, find a premade character and get a copy, or to search for
        build ideas!{" "}
      </p>
      <ul>
        <li>Log in to save Characters to your user.</li>
        <li>
          Click "Build a New Character" to make a new 5e Player Character from
          Scratch.
        </li>
        <li>
          Click "Find a New Character" to search for characters others have
          built, for build ideas or inspiration. You can even copy a character
          as someone else made them for quick access.
        </li>
      </ul>
    </div>
  )
}

export default Homepage
