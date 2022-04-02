import React from "react"

const FeaturesAndTraits = ({ formState, setFormState, handleChange }) => {
  return (
    <div className="featuresAndTraits">
      <label for="featuresAndTraits">Features and Traits: </label>
      <input
        id="featuresAndTraits"
        type="text"
        onChange={handleChange}
        defaultValue={formState.featuresAndTraits}
      />
    </div>
  )
}

export default FeaturesAndTraits
