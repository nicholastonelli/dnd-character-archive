import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import NewFullPage from "../NewFullPage/NewFullPage"
import { Navigate, useNavigate } from "react-router-dom"
import UploadImage from "../UploadImage/UploadImage"

import "../CharacterStaging/CharacterStaging.css"

const NewCharacterStaging = ({ user }) => {
  const navigate = useNavigate()
  const [foundCharacter, setFoundCharacter] = useState()
  const [uploadedImageUrl, setUploadedImageUrl] = useState()

  const characterState = {
    name: "",
    level: "",
    race: "",
    class: "",
    subclass: "",
    experiencePoints: "",
    background: "",
    alignment: "",
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
    inspiration: false,
    strSave: false,
    dexSave: false,
    conSave: false,
    intSave: false,
    wisSave: false,
    chaSave: false,

    acrobaticsProf: false,
    acrobaticsExpe: false,
    acrobaticsMisc: 0,

    animalHandlingProf: false,
    animalHandlingExpe: false,
    animalHandlingMisc: 0,

    arcanaProf: false,
    arcanaExpe: false,
    arcanaMisc: 0,

    athleticsProf: false,
    athleticsExpe: false,
    athleticsMisc: 0,

    deceptionProf: false,
    deceptionExpe: false,
    deceptionMisc: false,

    historyProf: false,
    historyExpe: false,
    historyMisc: 0,

    insightProf: false,
    insightExpe: false,
    insightMisc: 0,

    intimidationProf: false,
    intimidationExpe: false,
    intimidationMisc: 0,

    investigationProf: false,
    investigationExpe: false,
    investigationMisc: 0,

    medicineProf: false,
    medicineExpe: false,
    medicineMisc: 0,

    natureProf: false,
    natureExpe: false,
    natureMisc: 0,

    perceptionProf: false,
    perceptionExpe: false,
    perceptionMisc: 0,

    performanceProf: false,
    performanceExpe: false,
    performanceMisc: 0,

    persuasionProf: false,
    persuasionExpe: false,
    persuasionMisc: 0,

    religionProf: false,
    religionExpe: false,
    religionMisc: 0,

    sleightOfHandProf: false,
    sleightOfHandExpe: false,
    sleightOfHandMisc: 0,

    stealthProf: false,
    stealthExpe: false,
    stealthMisc: 0,

    survivalProf: false,
    survivalExpe: false,
    survivalMisc: 0,

    armorClass: 0,
    shieldBonus: 0,
    armorMiscBonus: 0,

    speed: 0,

    hitPointMax: 0,
    hitPoints: 0,
    tempHitPoints: 0,

    hitDie: 0,
    currentHitDie: 0,

    deathSuccs: 0,
    deathFails: 0,

    featuresAndTraits: "",
  }

  const [formState, setFormState] = useState()


  useEffect(()=>{
      setFormState(characterState)
  },[characterState])

  async function saveCharacter() {
    console.log("Saving Character")
    console.log(formState)
    let response = await fetch(
      `${process.env.REACT_APP_backendURI}/characters/`,
      {
        method: "POST",
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
            cha: formState.chaSave,
          },
          skills: {
            acrobatics: {
              proficiency: formState.acrobaticsProf,
              expertise: formState.acrobaticsExpe,
              misc: formState.acrobaticsMisc,
            },
            animalHandling: {
              proficiency: formState.animalHandlingProf,
              expertise: formState.animalHandlingExpe,
              misc: formState.animalHandlingMisc,
            },
            arcana: {
              proficiency: formState.arcanaProf,
              expertise: formState.arcanaExpe,
              misc: formState.arcanaMisc,
            },
            athletics: {
              proficiency: formState.athleticsProf,
              expertise: formState.athleticsExpe,
              misc: formState.athleticsMisc,
            },
            deception: {
              proficiency: formState.deceptionProf,
              expertise: formState.deceptionExpe,
              misc: formState.deceptionMisc,
            },
            history: {
              proficiency: formState.historyProf,
              expertise: formState.historyExpe,
              misc: formState.historyMisc,
            },
            insight: {
              proficiency: formState.insightProf,
              expertise: formState.insightExpe,
              misc: formState.insightMisc,
            },
            intimidation: {
              proficiency: formState.intimidationProf,
              expertise: formState.intimidationExpe,
              misc: formState.intimidationMisc,
            },
            investigation: {
              proficiency: formState.investigationProf,
              expertise: formState.investigationExpe,
              misc: formState.investigationMisc,
            },
            medicine: {
              proficiency: formState.medicineProf,
              expertise: formState.medicineExpe,
              misc: formState.medicineMisc,
            },
            nature: {
              proficiency: formState.natureProf,
              expertise: formState.natureExpe,
              misc: formState.natureMisc,
            },
            perception: {
              proficiency: formState.perceptionProf,
              expertise: formState.perceptionExpe,
              misc: formState.perceptionMisc,
            },
            performance: {
              proficiency: formState.performanceProf,
              expertise: formState.performanceExpe,
              misc: formState.performanceMisc,
            },
            persuasion: {
              proficiency: formState.persuasionProf,
              expertise: formState.persuasionExpe,
              misc: formState.persuasionMisc,
            },
            religion: {
              proficiency: formState.religionProf,
              expertise: formState.religionExpe,
              misc: formState.religionMisc,
            },
            sleightOfHand: {
              proficiency: formState.sleightOfHandProf,
              expertise: formState.sleightOfHandExpe,
              misc: formState.sleightOfHandMisc,
            },
            stealth: {
              proficiency: formState.stealthProf,
              expertise: formState.stealthExpe,
              misc: formState.stealthMisc,
            },
            survival: {
              proficiency: formState.survivalProf,
              expertise: formState.survivalExpe,
              misc: formState.survivalMisc,
            },
          },
          armorClass: {
            baseArmor: formState.armorClass,
            shieldBonus: formState.shieldBonus,
            miscBonus: formState.armorMiscBonus,
          },
          speed: formState.speed,
          hitPoints: {
            max: formState.hitPointMax,
            current: formState.hitPoints,
            temp: formState.tempHitPoints,
          },
          hitDice: {
            die: formState.hitDie,
            current: formState.currentHitDie,
          },
          deathSaves: {
            successes: formState.deathSuccs,
            failures: formState.deathFails,
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
    //navigate("/")
  }

  //console.log(characterState)
  return (
    <div>
      <NewFullPage
        character={characterState}
        characterState={characterState}
        formState={formState}
        setFormState={setFormState}
      />
      <UploadImage
        character={characterState}
        formState={formState}
        setFormState={setFormState}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
      />
      <button onClick={saveCharacter}>Save Changes</button>
    </div>
  )
}

export default NewCharacterStaging
