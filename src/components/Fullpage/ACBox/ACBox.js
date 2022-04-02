import React from "react"
import "./ACBox.css"

const ACBox = ({ formState, setFormState, handleChange, dexMod }) => {
  return (
    <div className="ACContainer">
      <div className="ACTop">
        <div className="armorClass">
          <p>
            Total Armor Class{" "}
            {formState.armorClass +
              formState.shieldBonus +
              formState.armorMiscBonus}{" "}
          </p>
          <label for="armorClass">Armor Class </label>
          <input
            id="armorClass"
            type="number"
            onChange={handleChange}
            defaultValue={formState.armorClass}
          />
          <label for="shieldBonus">Shield Bonus </label>
          <input
            id="shieldBonus"
            type="number"
            onChange={handleChange}
            defaultValue={formState.shieldBonus}
          />
          <label for="armorMisc Bonus">Misc </label>
          <input
            id="armorMiscBonus"
            type="number"
            onChange={handleChange}
            defaultValue={formState.armorMiscBonus}
          />
        </div>
        <div className="initiative">
          <p>Initiative: +{dexMod}</p>
        </div>
        <div className="speed">
          <label for="speed">Speed </label>
          <input
            id="speed"
            type="number"
            onChange={handleChange}
            defaultValue={formState.speed}
          />
        </div>
      </div>
      <div className="hp">
        <label for="hitPointMax">Hit Point Maximum </label>
        <input
          id="hitPointMax"
          type="number"
          onChange={handleChange}
          defaultValue={formState.hitPointMax}
        />
        <label for="hitPoints">Current Hit Points </label>
        <input
          id="hitPoints"
          type="number"
          onChange={handleChange}
          defaultValue={formState.hitPoints}
        />
        <label for="tempHitPoints">Temporary Hit Points </label>
        <input
          id="tempHitPoints"
          type="number"
          onChange={handleChange}
          defaultValue={formState.tempHitPoints}
        />
      </div>
      <div className="ACBottom">
        <div className="hitDice">
        <label for="hitDie">Hit Die: 1d</label>
          <input
            id="hitDie"
            type="number"
            onChange={handleChange}
            defaultValue={formState.hitDie}
          />
          <label for="hitDie">Current Hit Die: </label>
          <input
            id="currentHitDie"
            type="number"
            onChange={handleChange}
            defaultValue={formState.currentHitDie}
          />
        </div>
        <p>Death Saves</p>
        <div className="deathSaves">
        <label for="deathSuccs">Successes</label>
          <input
            id="deathSuccs"
            type="number"
            onChange={handleChange}
            defaultValue={formState.deathSuccs}
          />
          <label for="deathFails">Failures</label>
          <input
            id="deathFails"
            type="number"
            onChange={handleChange}
            defaultValue={formState.deathFails}
          />
        </div>
      </div>
    </div>
  )
}

export default ACBox
