import React, { useState } from "react"


const AbilitiesStatblock = ({ability}) => {
  return (
    <div class={ability}>
          <h4>{ability}</h4>
          <p>
            {ability} (
            {(ability - 10) / 2 >= 0 ? "+" : "-"}
            {Math.floor((ability - 10) / 2)})
          </p>
        </div>
  )
}

export default AbilitiesStatblock