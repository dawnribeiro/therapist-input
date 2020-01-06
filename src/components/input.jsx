import React, { useState } from 'react'
import axios from 'axios'

export default function input() {
  const [therapist, setTherapist] = useState({})

  const addTherapist = e => {
    const data = { ...therapist }
    axios
      .post(
        'https://neurosomatic-therapist-api.herokuapp.com/api/Therapist',
        data
      )
      .then(resp => {
        console.log(resp.data)
      }, [])
  }
  const updateValue = e => {
    const name = e.target.name
    const value = e.target.value
    setTherapist(data => {
      data[name] = value
      return data
    })
  }
  return (
    <form class="ui form" onSubmit={addTherapist}>
      <div class="field">
        <label>
          Last Name
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            onChange={e => updateValue(e)}
          ></input>
        </label>
      </div>
      <div class="field">
        <label>
          First Name
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            onChange={e => updateValue(e)}
          ></input>
        </label>
      </div>

      <button class="ui button" type="submit">
        Submit
      </button>
    </form>
  )
}
