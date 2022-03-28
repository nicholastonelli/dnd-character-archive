import { useEffect, useState } from "react"
import "./CharacterSheet.css"

const CharacterSheet = ({ character }) => {
  const [level, setLevel] = useState(character.level)
  const [prof, setProf] = useState(Math.floor(2 + (level - 1) / 4))
  const [insp, setInsp] = useState(character.inspiration)

  // Set Ability Scores and Mods as State
  const [str, setStr] = useState(character.abilities.str)
  const [strMod, setStrMod] = useState((str - 10) / 2)

  const [dex, setDex] = useState(character.abilities.dex)
  const [dexMod, setdexMod] = useState((dex - 10) / 2)

  const [con, setCon] = useState(character.abilities.con)
  const [conMod, setconMod] = useState((con - 10) / 2)

  const [int, setInt] = useState(character.abilities.int)
  const [intMod, setintMod] = useState((int - 10) / 2)

  const [wis, setWis] = useState(character.abilities.wis)
  const [wisMod, setwisMod] = useState((wis - 10) / 2)

  const [cha, setCha] = useState(character.abilities.cha)
  const [chaMod, setchaMod] = useState((cha - 10) / 2)

  // Set Saves proficiency Boolean as state

  const [strSaveProf, setStrSaveProf] = useState(character.savingThrows.str)
  const [dexSaveProf, setDexSaveProf] = useState(character.savingThrows.dex)
  const [conSaveProf, setConSaveProf] = useState(character.savingThrows.con)
  const [intSaveProf, setIntSaveProf] = useState(character.savingThrows.int)
  const [wisSaveProf, setWisSaveProf] = useState(character.savingThrows.wis)
  const [chaSaveProf, setChaSaveProf] = useState(character.savingThrows.cha)

  // Set Skills as Boolean State

  const [acrobaticsProf, setAcrobaticsProf] = useState(
    character.skills.acrobatics.proficiency
  )
  const [acrobaticsExpertise, setAcrobaticsExpertise] = useState(
    character.skills.acrobatics.expertise
  )

  const [perceptionProf, setPerceptionProf] = useState(
    character.skills.perception.proficiency
  )
  const [perceptionExpertise, setPerceptionExpertise] = useState(
    character.skills.perception.expertise
  )

  console.log(character)
  if (character !== undefined) {
    return (
      <div class="container">
        <div class="topBar">
          <div class="nameBar">
            <input defaultValue={character.name}></input>
            <p>Character Name</p>
          </div>
          <div class="infoBar">
            <div>
              <input defaultValue={character.class}></input>
              <input defaultValue={character.level}></input>
              <p>Class & Level</p>
            </div>
            <div>
              <input defaultValue={character.background}></input>
              <p>Background</p>
            </div>
            <div>
              <p>USER HERE</p>
              <p>Player Name</p>
            </div>
            <div>
              <input defaultValue={character.race}></input>
              <p>Race</p>
            </div>
            <div>
              <input defaultValue={character.alignment}></input>
              <p>Alignment</p>
            </div>
            <div>
              <input defaultValue={character.experiencePoints}></input>
              <p>Experience Points</p>
            </div>
          </div>
        </div>
        <div class="mainBody">
          <div class="column1">
            <div class="column1Top">
              <div class="abilityScores">
                <div class="str">
                  <p>Strength</p>
                  <input defaultValue={str}></input>
                  <p>
                    {strMod >= 0 ? "+" : ""}
                    {strMod}
                  </p>
                </div>
                <div class="dex">
                  <p>Dexterity</p>
                  <input defaultValue={dex}></input>
                  <p>
                    {dexMod >= 0 ? "+" : ""}
                    {dexMod}
                  </p>
                </div>
                <div class="con">
                  <p>Constitution</p>
                  <input defaultValue={con}></input>
                  <p>
                    {conMod >= 0 ? "+" : ""}
                    {conMod}
                  </p>
                </div>
                <div class="int">
                  <p>Intelligence</p>
                  <input defaultValue={int}></input>
                  <p>
                    {intMod >= 0 ? "+" : ""}
                    {intMod}
                  </p>
                </div>
                <div class="wis">
                  <p>Wisdom</p>
                  <input defaultValue={wis}></input>
                  <p>
                    {wisMod >= 0 ? "+" : ""}
                    {wisMod}
                  </p>
                </div>
                <div class="cha">
                  <p>Charisma</p>
                  <input defaultValue={cha}></input>
                  <p>
                    {chaMod >= 0 ? "+" : ""}
                    {chaMod}
                  </p>
                </div>
              </div>
              <div class="inspThrowsSkills">
                <div class="inspiration">
                  <input
                    type="checkbox"
                    defaultChecked={insp}
                    onClick={() => setInsp(!insp)}
                  ></input>
                  <p>Inspiration</p>
                </div>
                <div class="proficiency">
                  <p>+ {prof}</p>
                  <p>Proficiency Bonus</p>
                </div>
                <div class="throws">
                  <div>
                    <input
                      type="checkbox"
                      defaultChecked={strSaveProf}
                      onClick={() => setStrSaveProf(!strSaveProf)}
                    ></input>
                    {strSaveProf ? (
                      <p> {prof + strMod} Strength</p>
                    ) : (
                      <p> {strMod} Strength</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      defaultChecked={dexSaveProf}
                      onClick={() => setDexSaveProf(!dexSaveProf)}
                    ></input>
                    {dexSaveProf ? (
                      <p> {prof + dexMod} Dexterity</p>
                    ) : (
                      <p> {dexMod} Dexterity</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      defaultChecked={conSaveProf}
                      onClick={() => setConSaveProf(!conSaveProf)}
                    ></input>
                    {conSaveProf ? (
                      <p> {prof + conMod} Constitution</p>
                    ) : (
                      <p> {conMod} Constitution</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      defaultChecked={intSaveProf}
                      onClick={() => setIntSaveProf(!intSaveProf)}
                    ></input>
                    {intSaveProf ? (
                      <p> {prof + intMod} Intelligence</p>
                    ) : (
                      <p> {intMod} Intelligence</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      defaultChecked={wisSaveProf}
                      onClick={() => setWisSaveProf(!wisSaveProf)}
                    ></input>
                    {wisSaveProf ? (
                      <p> {prof + wisMod} Wisdom</p>
                    ) : (
                      <p> {wisMod} Wisdom</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      defaultChecked={chaSaveProf}
                      onClick={() => setChaSaveProf(!chaSaveProf)}
                    ></input>
                    {chaSaveProf ? (
                      <p> {prof + chaMod} Charisma</p>
                    ) : (
                      <p> {chaMod} Charisma</p>
                    )}
                  </div>

                  <p>Saving Throws</p>
                </div>
                <div class="skills">
                  <div class="acrobatics">
                    <input
                      type="checkbox"
                      defaultChecked={acrobaticsProf}
                      onClick={() => setAcrobaticsProf(!acrobaticsProf)}
                    ></input>
                    <input
                      type="checkbox"
                      defaultChecked={acrobaticsExpertise}
                      onClick={() =>
                        setAcrobaticsExpertise(!acrobaticsExpertise)
                      }
                    ></input>
                    {acrobaticsProf ? (
                      acrobaticsExpertise ? (
                        <p> {prof * 2 + dexMod} Acrobatics (Dex)</p>
                      ) : (
                        <p> {prof + dexMod} Acrobatics (Dex)</p>
                      )
                    ) : (
                      <p> {dexMod} Acrobatics (Dex)</p>
                    )}
                  </div>
                  <p>Skills</p>
                </div>
              </div>
            </div>
            <div class="column1Bottom">
              <div class="passivePerc">
                {perceptionProf ? (
                  perceptionExpertise ? (
                    <p> {10 + prof * 2 + wisMod} Passive Perception</p>
                  ) : (
                    <p> {10 + prof + wisMod} Passive Wisdom (Perception)</p>
                  )
                ) : (
                  <p> {10 + wisMod} Passive Wisdom (Perception)</p>
                )}
              </div>
              <div class="languages">
                <input
                  type="text"
                  defaultValue={character.languagesAndOtherProficiencies}
                ></input>
                <p>Other Proficiencies and Languages</p>
              </div>
            </div>
          </div>
          <div class="column2">
            <div class="statsBox">
            </div>
            <div class="attacks">

            </div>
            <div class="equipment">

            </div>
          </div>
          <div class="column3">
            <div class="personality">
                  <p>Personality Traits</p>
                  <p>Ideals</p>
                  <p>Bonds</p>
                  <p>Flaws</p>
            </div>
            <div class="features">
                  <p>Features and Traits</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default CharacterSheet
