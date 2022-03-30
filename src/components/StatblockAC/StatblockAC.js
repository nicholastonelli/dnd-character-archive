import React, {useState} from 'react'

const StatblockAC = ({character}) => {

    const [armorClass, setArmorClass] = useState((character.armorClass.baseArmor + character.armorClass.miscBonus))
  return (
    <div>
        <h4>Armor Class</h4>
        <p>{armorClass}</p>
    </div>
  )
}

export default StatblockAC