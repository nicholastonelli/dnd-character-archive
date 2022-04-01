import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import "./Fullpage.css"

const Fullpage = ({ character, formState, setFormState }) => {
  //console.log(character)
  //console.log(formState)

  const characterState = {
    name: character.name,
    level: character.level,
    race: character.race,
    class: character.class,
    subclass: character.subclass,
    experiencePoints: character.experiencePoints,
    background: character.background,
    alignment: character.alignment,
    str: character.abilities.str,
    dex: character.abilities.dex,
    con: character.abilities.con,
    int: character.abilities.int,
    wis: character.abilities.wis,
    cha: character.abilities.cha,
    inspiration: character.inspiration,
    strSave: character.savingThrows.str,
    dexSave: character.savingThrows.dex,
    conSave: character.savingThrows.con,
    intSave: character.savingThrows.int,
    wisSave: character.savingThrows.wis,
    chaSave: character.savingThrows.cha,

    acrobaticsProf: character.skills.acrobatics.proficiency,
    acrobaticsExpe: character.skills.acrobatics.expertise,
    acrobaticsMisc: character.skills.acrobatics.misc,

    animalHandlingProf: character.skills.animalHandling.proficiency,
    animalHandlingExpe: character.skills.animalHandling.expertise,
    animalHandlingMisc: character.skills.animalHandling.misc,

    arcanaProf: character.skills.arcana.proficiency,
    arcanaExpe: character.skills.arcana.expertise,
    arcanaMisc: character.skills.arcana.misc,

    athleticsProf: character.skills.athletics.proficiency,
    athleticsExpe: character.skills.athletics.expertise,
    athleticsMisc: character.skills.athletics.misc,

    deceptionProf: character.skills.deception.proficiency,
    deceptionExpe: character.skills.deception.expertise,
    deceptionMisc: character.skills.deception.misc,

    historyProf: character.skills.history.proficiency,
    historyExpe: character.skills.history.expertise,
    historyMisc: character.skills.history.misc,

    insightProf: character.skills.insight.proficiency,
    insightExpe: character.skills.insight.expertise,
    insightMisc: character.skills.insight.misc,

    intimidationProf: character.skills.intimidation.proficiency,
    intimidationExpe: character.skills.intimidation.expertise,
    intimidationMisc: character.skills.intimidation.misc,

    investigationProf: character.skills.investigation.proficiency,
    investigationExpe: character.skills.investigation.expertise,
    investigationMisc: character.skills.investigation.misc,

    medicineProf: character.skills.medicine.proficiency,
    medicineExpe: character.skills.medicine.expertise,
    medicineMisc: character.skills.medicine.misc,

    natureProf: character.skills.nature.proficiency,
    natureExpe: character.skills.nature.expertise,
    natureMisc: character.skills.nature.misc,

    perceptionProf: character.skills.perception.proficiency,
    perceptionExpe: character.skills.perception.expertise,
    perceptionMisc: character.skills.perception.misc,

    performanceProf: character.skills.performance.proficiency,
    performanceExpe: character.skills.performance.expertise,
    performanceMisc: character.skills.performance.misc,

    persuasionProf: character.skills.persuasion.proficiency,
    persuasionExpe: character.skills.persuasion.expertise,
    persuasionMisc: character.skills.persuasion.misc,

    religionProf: character.skills.religion.proficiency,
    religionExpe: character.skills.religion.expertise,
    religionMisc: character.skills.religion.misc,

    sleightOfHandProf: character.skills.sleightOfHand.proficiency,
    sleightOfHandExpe: character.skills.sleightOfHand.expertise,
    sleightOfHandMisc: character.skills.sleightOfHand.misc,

    stealthProf: character.skills.stealth.proficiency,
    stealthExpe: character.skills.stealth.expertise,
    stealthMisc: character.skills.stealth.misc,

    survivalProf: character.skills.survival.proficiency,
    survivalExpe: character.skills.survival.expertise,
    survivalMisc: character.skills.survival.misc,
  }

  const handleChange = (event) => {
    if (event.target.type === "number") {
      setFormState({
        ...formState,
        [event.target.id]: parseInt(event.target.value),
      })
    } else if (event.target.type === "text") {
      setFormState({ ...formState, [event.target.id]: event.target.value })
    } else if (event.target.type === "checkbox") {
      setFormState({
        ...formState,
        [event.target.id]: event.target.checked !== false,
      })
    }
  }

  const [profMod, setProfMod] = useState()
  const [strMod, setStrMod] = useState()
  const [dexMod, setDexMod] = useState()
  const [conMod, setConMod] = useState()
  const [intMod, setIntMod] = useState()
  const [wisMod, setWisMod] = useState()
  const [chaMod, setChaMod] = useState()

  useEffect(() => {
    setFormState(characterState)
  }, [])

  useEffect(() => {
    setProfMod(Math.floor(2 + (formState.level - 1) / 4))
  }, [formState.level])
  useEffect(() => {
    setStrMod(Math.floor((formState.str - 10) / 2))
  }, [formState.str])
  useEffect(() => {
    setDexMod(Math.floor((formState.dex - 10) / 2))
  }, [formState.dex])
  useEffect(() => {
    setConMod(Math.floor((formState.con - 10) / 2))
  }, [formState.con])
  useEffect(() => {
    setIntMod(Math.floor((formState.int - 10) / 2))
  }, [formState.int])
  useEffect(() => {
    setWisMod(Math.floor((formState.wis - 10) / 2))
  }, [formState.wis])
  useEffect(() => {
    setChaMod(Math.floor((formState.cha - 10) / 2))
  }, [formState.cha])

  return (
    <div>
      <div className="topBar">
        <div className="nameBar">
          <label for="name">Character Name: </label>
          <input
            id="name"
            type="text"
            onChange={handleChange}
            defaultValue={formState.name}
          />
        </div>
        <div class="levelBar">
          <label for="level">Level: </label>
          <input
            id="level"
            type="number"
            onChange={handleChange}
            defaultValue={formState.level}
          />
          <p>Proficiency Modifier: + {profMod}</p>
        </div>
        <div className="class">
          <label for="class">Class: </label>
          <input
            id="class"
            type="text"
            onChange={handleChange}
            defaultValue={formState.class}
          />
        </div>
        <div className="experiencePoints">
          <label for="experiencePoints">EXP: </label>
          <input
            id="experiencePoints"
            type="number"
            onChange={handleChange}
            defaultValue={formState.experiencePoints}
          />
        </div>
        <div className="race">
          <label for="level">Race: </label>
          <input
            id="race"
            type="text"
            onChange={handleChange}
            defaultValue={formState.race}
          />
        </div>
        <div className="alignment">
          <label for="level">Alignment: </label>
          <input
            id="alignment"
            type="text"
            onChange={handleChange}
            defaultValue={formState.alignment}
          />
        </div>
        <div className="background">
          <label for="level">Background: </label>
          <input
            id="background"
            type="text"
            onChange={handleChange}
            defaultValue={formState.background}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column1">
          <div className="abilitiesBar">
            <p>Abilities</p>
            <div className="str">
              <label for="level">STR: </label>
              <input
                id="str"
                type="number"
                onChange={handleChange}
                defaultValue={formState.str}
              />
              <p>
                {strMod >= 0 ? "+" : ""}
                {strMod}
              </p>
            </div>
            <div className="dex">
              <label for="dex">DEX: </label>
              <input
                id="dex"
                type="number"
                onChange={handleChange}
                defaultValue={formState.dex}
              />
              <p>
                {dexMod >= 0 ? "+" : ""}
                {dexMod}
              </p>
            </div>
            <div className="con">
              <label for="con">CON: </label>
              <input
                id="con"
                type="number"
                onChange={handleChange}
                defaultValue={formState.con}
              />
              <p>
                {conMod >= 0 ? "+" : ""}
                {conMod}
              </p>
            </div>
            <div className="int">
              <label for="int">INT: </label>
              <input
                id="int"
                type="number"
                onChange={handleChange}
                defaultValue={formState.int}
              />
              <p>
                {intMod >= 0 ? "+" : ""}
                {intMod}
              </p>
            </div>
            <div className="wis">
              <label for="wis">WIS: </label>
              <input
                id="wis"
                type="number"
                onChange={handleChange}
                defaultValue={formState.wis}
              />
              <p>
                {wisMod >= 0 ? "+" : ""}
                {wisMod}
              </p>
            </div>
            <div className="cha">
              <label for="cha">CHA: </label>
              <input
                id="cha"
                type="number"
                onChange={handleChange}
                defaultValue={formState.cha}
              />
              <p>
                {chaMod >= 0 ? "+" : ""}
                {chaMod}
              </p>
            </div>
          </div>
          <div className="passiveWisdom">
            {formState.perceptionProf ? (
              formState.perceptionExpe ? (
                <p>{10 + profMod * 2 + wisMod + formState.perceptionMisc}: Passive Wisdom (Perception)</p>
              ) : (
                <p>{10 + profMod + wisMod + formState.perceptionMisc}: Passive Wisdom (Perception)</p>
              )
            ) : (
              <p>{10 + wisMod + formState.perceptionMisc}: Passive Wisdom (Perception)</p>
            )}
          </div>
        </div>
        <div className="column2">
          <div className="inspBar">
            <p>Inspiration</p>
            <input
              id="inspiration"
              type="checkbox"
              onChange={handleChange}
              defaultChecked={formState.inspiration}
            />
          </div>
          <div className="savesBar">
            <div className="strSaveBar">
              <p>Strength Save:</p>
              {formState.strSave ? <p>{strMod + profMod}</p> : <p>{strMod}</p>}
              <input
                id="strSave"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.strSave}
              />
            </div>
            <div className="dexSaveBar">
              <p>Dexterity Save:</p>
              {formState.dexSave ? <p>{dexMod + profMod}</p> : <p>{dexMod}</p>}
              <input
                id="dexSave"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.dexSave}
              />
            </div>
            <div className="conSaveBar">
              <p>Constitution Save:</p>
              {formState.conSave ? <p>{conMod + profMod}</p> : <p>{conMod}</p>}
              <input
                id="conSave"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.conSave}
              />
            </div>
            <div className="intSaveBar">
              <p>Intelligence Save:</p>
              {formState.intSave ? <p>{intMod + profMod}</p> : <p>{intMod}</p>}
              <input
                id="intSave"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.intSave}
              />
            </div>
            <div className="wisSaveBar">
              <p>Wisdom Save:</p>
              {formState.wisSave ? <p>{wisMod + profMod}</p> : <p>{wisMod}</p>}
              <input
                id="wisSave"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.wisSave}
              />
            </div>
            <div className="chaSaveBar">
              <p>Charisma Save:</p>
              {formState.chaSave ? <p>{chaMod + profMod}</p> : <p>{chaMod}</p>}
              <input
                id="chaSave"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.chaSave}
              />
            </div>
          </div>
        </div>
        <div className="column3">
          <div className="skillsBar">
            Skills
            <div className="acrobatics">
              {formState.acrobaticsProf ? (
                formState.acrobaticsExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + dexMod + formState.acrobaticsMisc} Acrobatics
                    (Dex)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + dexMod + formState.acrobaticsMisc} Acrobatics
                    (Dex)
                  </p>
                )
              ) : (
                <p> {dexMod + formState.acrobaticsMisc} Acrobatics (Dex)</p>
              )}
              <label for="acrobaticsProf">Proficient</label>
              <input
                id="acrobaticsProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.acrobaticsProf}
              />

              <>
                <label for="acrobaticsExpe">Expertise</label>
                <input
                  id="acrobaticsExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.acrobaticsExpe}
                />
              </>

              <label for="acrobaticsMisc">Misc Bonus:</label>
              <input
                id="acrobaticsMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.acrobaticsMisc}
              />
            </div>
            <div className="athletics">
              {formState.athleticsProf ? (
                formState.athleticsExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + strMod + formState.athleticsMisc} Athletics
                    (Str)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + strMod + formState.athleticsMisc} Athletics (Str)
                  </p>
                )
              ) : (
                <p> {strMod + formState.athleticsMisc} Athletics (Str)</p>
              )}
              <label for="athleticsProf">Proficient</label>
              <input
                id="athleticsProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.athleticsProf}
              />

              <>
                <label for="athleticsExpe">Expertise</label>
                <input
                  id="athleticsExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.athleticsExpe}
                />
              </>

              <label for="athleticsMisc">Misc Bonus:</label>
              <input
                id="athleticsMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.athleticsMisc}
              />
            </div>
            <div className="animalHandling">
              {formState.animalHandlingProf ? (
                formState.animalHandlingExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + wisMod + formState.animalHandlingMisc} Animal
                    Handling (Wis)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + wisMod + formState.animalHandlingMisc} Animal
                    Handling (Wis)
                  </p>
                )
              ) : (
                <p>
                  {" "}
                  {wisMod + formState.animalHandlingMisc} Animal Handling (Wis)
                </p>
              )}
              <label for="animalHandlingProf">Proficient</label>
              <input
                id="animalHandlingProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.animalHandlingProf}
              />

              <>
                <label for="animalHandlingExpe">Expertise</label>
                <input
                  id="animalHandlingExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.animalHandlingExpe}
                />
              </>

              <label for="animalHandlingMisc">Misc Bonus:</label>
              <input
                id="animalHandlingMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.animalHandlingMisc}
              />
            </div>
            <div className="arcana">
              {formState.arcanaProf ? (
                formState.arcanaExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + intMod + formState.arcanaMisc} Arcana (Int)
                  </p>
                ) : (
                  <p> {profMod + intMod + formState.arcanaMisc} Arcana (Int)</p>
                )
              ) : (
                <p> {intMod + formState.arcanaMisc} Arcana (Int)</p>
              )}
              <label for="arcanaProf">Proficient</label>
              <input
                id="arcanaProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.arcanaProf}
              />

              <>
                <label for="arcanaExpe">Expertise</label>
                <input
                  id="arcanaExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.arcanaExpe}
                />
              </>

              <label for="arcanaMisc">Misc Bonus:</label>
              <input
                id="arcanaMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.arcanaMisc}
              />
            </div>
            <div className="deception">
              {formState.deceptionProf ? (
                formState.deceptionExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + chaMod + formState.deceptionMisc} Deception
                    (Cha)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + chaMod + formState.deceptionMisc} Deception (Cha)
                  </p>
                )
              ) : (
                <p> {chaMod + formState.deceptionMisc} Deception (Cha)</p>
              )}
              <label for="deceptionProf">Proficient</label>
              <input
                id="deceptionProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.deceptionProf}
              />

              <>
                <label for="deceptionExpe">Expertise</label>
                <input
                  id="deceptionExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.deceptionExpe}
                />
              </>

              <label for="deceptionMisc">Misc Bonus:</label>
              <input
                id="deceptionMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.deceptionMisc}
              />
            </div>
            <div className="history">
              {formState.historyProf ? (
                formState.historyExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + intMod + formState.historyMisc} History (Int)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + intMod + formState.historyMisc} History (Int)
                  </p>
                )
              ) : (
                <p> {intMod + formState.historyMisc} History (Int)</p>
              )}
              <label for="historyProf">Proficient</label>
              <input
                id="historyProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.historyProf}
              />

              <>
                <label for="historyExpe">Expertise</label>
                <input
                  id="historyExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.historyExpe}
                />
              </>

              <label for="historyMisc">Misc Bonus:</label>
              <input
                id="historyMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.historyMisc}
              />
            </div>
            <div className="insight">
              {formState.insightProf ? (
                formState.insightExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + wisMod + formState.insightMisc} Insight (Wis)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + wisMod + formState.insightMisc} Insight (Wis)
                  </p>
                )
              ) : (
                <p> {wisMod + formState.insightMisc} Insight (Wis)</p>
              )}
              <label for="insightProf">Proficient</label>
              <input
                id="insightProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.insightProf}
              />

              <>
                <label for="insightExpe">Expertise</label>
                <input
                  id="insightExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.insightExpe}
                />
              </>

              <label for="insightMisc">Misc Bonus:</label>
              <input
                id="insightMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.insightMisc}
              />
            </div>
            <div className="intimidation">
              {formState.intimidationProf ? (
                formState.intimidationExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + chaMod + formState.intimidationMisc}{" "}
                    Intimidation (Cha)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + chaMod + formState.intimidationMisc}{" "}
                    Initimidation (Cha)
                  </p>
                )
              ) : (
                <p> {chaMod + formState.intimidationMisc} Intimidation (Cha)</p>
              )}
              <label for="intimidationProf">Proficient</label>
              <input
                id="intimidationProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.intimidationProf}
              />

              <>
                <label for="intimidationExpe">Expertise</label>
                <input
                  id="intimidationExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.intimidationExpe}
                />
              </>

              <label for="intimidationMisc">Misc Bonus:</label>
              <input
                id="intimidationMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.intimidationMisc}
              />
            </div>
            <div className="investigation">
              {formState.investigationProf ? (
                formState.investigationExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + intMod + formState.investigationMisc}{" "}
                    Investigation (Int)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + intMod + formState.investigationMisc}{" "}
                    Investigation (Int)
                  </p>
                )
              ) : (
                <p>
                  {" "}
                  {intMod + formState.investigationMisc} Incvesitgation (Int)
                </p>
              )}
              <label for="investigationProf">Proficient</label>
              <input
                id="investigationProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.investigationProf}
              />

              <>
                <label for="investigationExpe">Expertise</label>
                <input
                  id="investigationExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.investigationExpe}
                />
              </>

              <label for="investigationMisc">Misc Bonus:</label>
              <input
                id="investigationMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.investigationMisc}
              />
            </div>
            <div className="medicine">
              {formState.medicineProf ? (
                formState.medicineExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + wisMod + formState.medicineMisc} Medicine
                    (Wis)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + wisMod + formState.medicineMisc} Medicine (Wis)
                  </p>
                )
              ) : (
                <p> {wisMod + formState.medicineMisc} Medicine (Wis)</p>
              )}
              <label for="medicineProf">Proficient</label>
              <input
                id="medicineProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.medicineProf}
              />

              <>
                <label for="medicineExpe">Expertise</label>
                <input
                  id="medicineExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.medicineExpe}
                />
              </>

              <label for="medicineMisc">Misc Bonus:</label>
              <input
                id="medicineMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.medicineMisc}
              />
            </div>
            <div className="perception">
              {formState.perceptionProf ? (
                formState.perceptionExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + wisMod + formState.perceptionMisc} Perception
                    (Wis)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + wisMod + formState.perceptionMisc} Perception
                    (Wis)
                  </p>
                )
              ) : (
                <p> {wisMod + formState.perceptionMisc} Perception (Wis)</p>
              )}
              <label for="perceptionProf">Proficient</label>
              <input
                id="perceptionProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.perceptionProf}
              />

              <>
                <label for="perceptionExpe">Expertise</label>
                <input
                  id="perceptionExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.perceptionExpe}
                />
              </>

              <label for="perceptionMisc">Misc Bonus:</label>
              <input
                id="perceptionMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.perceptionMisc}
              />
            </div>
            <div className="performance">
              {formState.performanceProf ? (
                formState.performanceExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + chaMod + formState.performanceMisc}{" "}
                    Performance (Cha)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + chaMod + formState.performanceMisc} Performance
                    (Cha)
                  </p>
                )
              ) : (
                <p> {chaMod + formState.performanceMisc} Performance (Cha)</p>
              )}
              <label for="performanceProf">Proficient</label>
              <input
                id="performanceProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.performanceProf}
              />

              <>
                <label for="performanceExpe">Expertise</label>
                <input
                  id="performanceExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.performanceExpe}
                />
              </>

              <label for="performanceMisc">Misc Bonus:</label>
              <input
                id="performanceMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.performanceMisc}
              />
            </div>
            <div className="persuasion">
              {formState.persuasionProf ? (
                formState.persuasionExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + chaMod + formState.persuasionMisc} Persuasion
                    (Cha)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + chaMod + formState.persuasionMisc} Persuasion
                    (Cha)
                  </p>
                )
              ) : (
                <p> {chaMod + formState.persuasionMisc} Persuasion (Cha)</p>
              )}
              <label for="persuasionProf">Proficient</label>
              <input
                id="persuasionProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.persuasionProf}
              />

              <>
                <label for="persuasionExpe">Expertise</label>
                <input
                  id="persuasionExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.persuasionExpe}
                />
              </>

              <label for="persuasionMisc">Misc Bonus:</label>
              <input
                id="persuasionMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.persuasionMisc}
              />
            </div>
            <div className="religion">
              {formState.religionProf ? (
                formState.religionExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + intMod + formState.religionMisc} Religion
                    (Int)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + intMod + formState.religionMisc} Religion (Int)
                  </p>
                )
              ) : (
                <p> {intMod + formState.religionMisc} Religion (Int)</p>
              )}
              <label for="religionProf">Proficient</label>
              <input
                id="religionProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.religionProf}
              />

              <>
                <label for="religionExpe">Expertise</label>
                <input
                  id="religionExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.religionExpe}
                />
              </>

              <label for="religionMisc">Misc Bonus:</label>
              <input
                id="religionMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.religionMisc}
              />
            </div>
            <div className="sleightOfHand">
              {formState.sleightOfHandProf ? (
                formState.sleightOfHandExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + dexMod + formState.sleightOfHandMisc} Sleight
                    of Hand (Dex)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + dexMod + formState.sleightOfHandMisc} Sleight of
                    Hand (Dex)
                  </p>
                )
              ) : (
                <p>
                  {" "}
                  {dexMod + formState.sleightOfHandMisc} Sleight of Hand (Dex)
                </p>
              )}
              <label for="sleightOfHandProf">Proficient</label>
              <input
                id="sleightOfHandProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.sleightOfHandProf}
              />

              <>
                <label for="sleightOfHandExpe">Expertise</label>
                <input
                  id="sleightOfHandExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.sleightOfHandExpe}
                />
              </>

              <label for="sleightOfHandMisc">Misc Bonus:</label>
              <input
                id="sleightOfHandMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.sleightOfHandMisc}
              />
            </div>
            <div className="stealth">
              {formState.stealthProf ? (
                formState.stealthExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + dexMod + formState.stealthMisc} Stealth (Dex)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + dexMod + formState.stealthMisc} Stealth (Dex)
                  </p>
                )
              ) : (
                <p> {dexMod + formState.stealthMisc} Stealth (Dex)</p>
              )}
              <label for="stealthProf">Proficient</label>
              <input
                id="stealthProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.stealthProf}
              />

              <>
                <label for="stealthExpe">Expertise</label>
                <input
                  id="stealthExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.stealthExpe}
                />
              </>

              <label for="stealthMisc">Misc Bonus:</label>
              <input
                id="stealthMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.stealthMisc}
              />
            </div>
            <div className="survival">
              {formState.survivalProf ? (
                formState.survivalExpe ? (
                  <p>
                    {" "}
                    {profMod * 2 + wisMod + formState.survivalMisc} Survival
                    (Wis)
                  </p>
                ) : (
                  <p>
                    {" "}
                    {profMod + wisMod + formState.survivalMisc} Survival (Wis)
                  </p>
                )
              ) : (
                <p> {wisMod + formState.survivalMisc} Survival (Wis)</p>
              )}
              <label for="survivalProf">Proficient</label>
              <input
                id="survivalProf"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={formState.survivalProf}
              />

              <>
                <label for="survivalExpe">Expertise</label>
                <input
                  id="survivalExpe"
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={formState.survivalExpe}
                />
              </>

              <label for="survivalMisc">Misc Bonus:</label>
              <input
                id="survivalMisc"
                type="number"
                onChange={handleChange}
                defaultChecked={formState.survivalMisc}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fullpage
