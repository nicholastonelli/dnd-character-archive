import React from "react"
import "./Statblock.css"
import axios from 'axios'

const Statblock = ({ character, foundUser }) => {

  async function handleDelete() {
    axios
      .delete(`${process.env.REACT_APP_backendURI}/characters/${character._id}`)
      .then(
        
      )
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <h2>
        medium {character.race}, {character.alignment}
      </h2>
      <div className="abilities">
        <div class="ability-strength">
          <h4>STR</h4>
          <p>{character.abilities.str} (+2)</p>
        </div>
        <div class="ability-dexterity">
          <h4>DEX</h4>
          <p>11 (+0)</p>
        </div>
        <div class="ability-constitution">
          <h4>CON</h4>
          <p>13 (+1)</p>
        </div>
        <div class="ability-intelligence">
          <h4>INT</h4>
          <p>1 (-5)</p>
        </div>
        <div class="ability-wisdom">
          <h4>WIS</h4>
          <p>3 (-4)</p>
        </div>
        <div class="ability-charisma">
          <h4>CHA</h4>
          <p>1 (-5)</p>
        </div>
      </div>
      {character.user === foundUser._id ? (
        <button onClick={handleDelete}>DELETE</button>
      ) : null}
    </div>
  )
}

export default Statblock
