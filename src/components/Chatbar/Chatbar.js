import React from 'react'
import Chatbox from '../Chatbox/Chatbox'
import './Chatbar.css'

const Chatbar = ({rollBonus, setRollBonus, rollDice, chatState, setChatState}) => {
  return (
    <div className="chatbar">
      <p>Chatbar</p>
        <Chatbox />
    </div>
  )
}


export default Chatbar