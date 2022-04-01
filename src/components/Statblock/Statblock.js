import React, { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import "./Statblock.css"
import axios from "axios"
import AbilitiesStatblock from "../AbilitiesStatblock/AbilitiesStatblock"
import { useEffect } from "react/cjs/react.development"
import StatblockAC from "../StatblockAC/StatblockAC"

const Statblock = ({ character, foundUser, rollDice, rollBonus }) => {
  const navigate = useNavigate()
  async function handleDelete() {
    axios
      .delete(`${process.env.REACT_APP_backendURI}/characters/${character._id}`)
      .then()
      navigate("/")
  }

  async function handleCopy() {
    console.log("COPY THAT")
  }

  const [abilities, setAbilities] = useState(character.abilities)

  useEffect(() =>{
    setAbilities(character.abilities)
  }, [])

  return (
    <div>
      <Link to={`/characters/${character._id}`}>
      <h1>{character.name}</h1>
      </Link>
      <h2>
        medium {character.race}, {character.alignment}
      </h2>

      {/* {abilities.map((ability) => {
        return <AbilitiesStatblock ability={ability} key={ability}/>
      })} */}
      <StatblockAC character={character}/>
      <div className="abilities">
        <div class="ability-strength">
          <h4>STR</h4>
          <p>
            {character.abilities.str} (
            {(character.abilities.str - 10) / 2 >= 0 ? "+" : "-"}
            {Math.floor((character.abilities.str - 10) / 2)})
          </p>
        </div>
        <div class="ability-dexterity">
          <h4>DEX</h4>
          <p>
            {character.abilities.dex} (
            {(character.abilities.dex - 10) / 2 >= 0 ? "+" : "-"}
            {Math.floor((character.abilities.dex - 10) / 2)})
          </p>
        </div>
        <div class="ability-constitution">
          <h4>CON</h4>
          <p>
            {character.abilities.con} (
            {(character.abilities.con - 10) / 2 >= 0 ? "+" : "-"}
            {Math.floor((character.abilities.con - 10) / 2)})
          </p>
        </div>
        <div class="ability-intelligence">
          <h4>INT</h4>
          <p>
            {character.abilities.int} (
            {(character.abilities.int - 10) / 2 >= 0 ? "+" : "-"}
            {Math.floor((character.abilities.int - 10) / 2)})
          </p>
        </div>
        <div class="ability-wisdom">
          <h4>WIS</h4>
          <p>
            {character.abilities.wis} (
            {(character.abilities.wis - 10) / 2 >= 0 ? "+" : "-"}
            {Math.floor((character.abilities.wis - 10) / 2)})
          </p>
        </div>
        <div class="ability-charisma">
          <h4>CHA</h4>
          <p>
            {character.abilities.cha} (
            {(character.abilities.cha - 10) / 2 >= 0 ? "+" : "-"}
            {Math.floor((character.abilities.cha - 10) / 2)})
          </p>
        </div>
      </div>
      {character.user === foundUser._id ? (
        <button onClick={handleDelete}>DELETE</button>
      ) : null}
      <button onClick={handleCopy}>COPY CHARACTER</button>
    </div>
  )
}

export default Statblock
