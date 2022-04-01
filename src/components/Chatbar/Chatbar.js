import React from 'react'
import Chatbox from '../Chatbox/Chatbox'
import './Chatbar.css'

const Chatbar = ({rollBonus, setRollBonus, rollDice, chatState, setChatState}) => {
  return (
    <div className="chatbar">
      <p>Chatbar</p>
      <p>Roll Name:</p>
        <p>1d20 + {rollBonus} =</p>
        <p>{rollDice(20, rollBonus)}</p>
    </div>
  )
}


export default Chatbar