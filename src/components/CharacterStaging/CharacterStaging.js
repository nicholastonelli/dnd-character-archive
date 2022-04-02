import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import Fullpage from "../Fullpage/Fullpage"
import { Navigate, useNavigate } from "react-router-dom"
import UploadImage from "../UploadImage/UploadImage"

import './CharacterStaging.css'

// The Character Staging Component uses Params to find a character before passing to another component

const CharacterStaging = ({ user }) => {
  const navigate = useNavigate()
  const [foundCharacter, setFoundCharacter] = useState()
  const [uploadedImageUrl, setUploadedImageUrl] = useState()

  const initialState = {
    name: "",
    level: "",
    race: "",
    class: "",
    subclass: "",
    experiencePoints: "",
    background: "",
    alignment: "",

  }

  
  const [formState, setFormState] = useState(initialState)
  let id = useParams()

  function getCharacter() {
    axios
      .get(`${process.env.REACT_APP_backendURI}/characters/${id.id}`)
      .then((res) => {
        setFoundCharacter(res.data)
      })
  }

  async function saveCharacter() {
    console.log("Saving Character")
    console.log(formState)
    let response = await fetch(
      `${process.env.REACT_APP_backendURI}/characters/${id.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name: formState.name,
          class: formState.class,
          level: formState.level,
          subclass: formState.subclass,
          race: formState.race,
          alignment: formState.alignment,
          experiencePoints: formState.experiencePoints,
          background: formState.background,
          abilities: {
            str: formState.str,
            dex: formState.dex,
            con: formState.con,
            int: formState.int,
            wis: formState.wis,
            cha: formState.cha,
          },
          inspiration: formState.inspiration,
          savingThrows: {
            str: formState.strSave,
            dex: formState.dexSave,
            con: formState.conSave,
            int: formState.intSave,
            wis: formState.wisSave,
            cha: formState.chaSave
          },
          skills: {
            acrobatics: {
              proficiency: formState.acrobaticsProf,
              expertise: formState.acrobaticsExpe,
              misc: formState.acrobaticsMisc
            },
            animalHandling: {
              proficiency: formState.animalHandlingProf,
              expertise: formState.animalHandlingExpe,
              misc: formState.animalHandlingMisc
            },
            arcana: {
              proficiency: formState.arcanaProf,
              expertise: formState.arcanaExpe,
              misc: formState.arcanaMisc
            },
            athletics: {
              proficiency: formState.athleticsProf,
              expertise: formState.athleticsExpe,
              misc: formState.athleticsMisc
            },
            deception: {
              proficiency: formState.deceptionProf,
              expertise: formState.deceptionExpe,
              misc: formState.deceptionMisc
            },
            history: {
              proficiency: formState.historyProf,
              expertise: formState.historyExpe,
              misc: formState.historyMisc
            },
            insight: {
              proficiency: formState.insightProf,
              expertise: formState.insightExpe,
              misc: formState.insightMisc
            },
            intimidation: {
              proficiency: formState.intimidationProf,
              expertise: formState.intimidationExpe,
              misc: formState.intimidationMisc
            },
            investigation: {
              proficiency: formState.investigationProf,
              expertise: formState.investigationExpe,
              misc: formState.investigationMisc
            },
            medicine: {
              proficiency: formState.medicineProf,
              expertise: formState.medicineExpe,
              misc: formState.medicineMisc
            },
            nature: {
              proficiency: formState.natureProf,
              expertise: formState.natureExpe,
              misc: formState.natureMisc
            },
            perception: {
              proficiency: formState.perceptionProf,
              expertise: formState.perceptionExpe,
              misc: formState.perceptionMisc
            },
            performance: {
              proficiency: formState.performanceProf,
              expertise: formState.performanceExpe,
              misc: formState.performanceMisc
            },
            persuasion: {
              proficiency: formState.persuasionProf,
              expertise: formState.persuasionExpe,
              misc: formState.persuasionMisc
            },
            religion: {
              proficiency: formState.religionProf,
              expertise: formState.religionExpe,
              misc: formState.religionMisc
            },
            sleightOfHand: {
              proficiency: formState.sleightOfHandProf,
              expertise: formState.sleightOfHandExpe,
              misc: formState.sleightOfHandMisc
            },
            stealth: {
              proficiency: formState.stealthProf,
              expertise: formState.stealthExpe,
              misc: formState.stealthMisc
            },
            survival: {
              proficiency: formState.survivalProf,
              expertise: formState.survivalExpe,
              misc: formState.survivalMisc
            },
            
          },
          armorClass: {
            baseArmor: formState.armorClass,
            shieldBonus: formState.shieldBonus,
            miscBonus: formState.armorMiscBonus,
          },
          speed: formState.speed,
          hitPoints:{
            max: formState.hitPointMax,
            current: formState.hitPoints,
            temp: formState.tempHitPoints
          },
          hitDice:{
            die: formState.hitDie,
            current: formState.currentHitDie
          },
          deathSaves: {
            successes: formState.deathSuccs,
            failures: formState.deathFails
          },
          featuresAndTraits: formState.featuresAndTraits,
          userId: user._id,
          user: user,
          image: uploadedImageUrl,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    let character = await response.json()
    navigate("/")
  }

  useEffect(() => {
    getCharacter()
  }, [])

  //console.log(foundCharacter)
  if (foundCharacter) {
    return (
      <div>
        {foundCharacter.image ? (
          <img src={foundCharacter.image} className="portrait" alt={foundCharacter.name}/>
        ) : null}
        <Fullpage
          character={foundCharacter}
          formState={formState}
          setFormState={setFormState}
        />
        <UploadImage
          character={foundCharacter}
          formState={formState}
          setFormState={setFormState}
          uploadedImageUrl={uploadedImageUrl}
          setUploadedImageUrl={setUploadedImageUrl}
        />
        <button onClick={saveCharacter}>Save Changes</button>
      </div>
    )
  } else {
    return <div>Loading ...</div>
  }
}

export default CharacterStaging
