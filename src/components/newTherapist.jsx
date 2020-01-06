import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function NewTherapist() {
  const [therapist, setTherapist] = useState({})
  const [allTherapists, setAllTherapists] = useState({})

  useEffect(() => {
    axios
      .get('https://neurosomatic-therapist-api.herokuapp.com/api/Therapist')
      .then(resp => {
        setAllTherapists(resp.data)
        console.log(resp.data)
      })
  }, [])

  const addTherapist = e => {
    const data = { ...therapist }
    axios
      .post(
        'https://neurosomatic-therapist-api.herokuapp.com/api/Therapist',
        data
      )
      .then(resp => {
        console.log('new therapist added', resp.data)
      }, [])
    e.target.reset()
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
    <section>
      <div>
        <form className="ui form" onSubmit={addTherapist}>
          <div className="field">
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              Work Number
              <input
                type="text"
                name="workPhone"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              Home Number
              <input
                type="text"
                name="homePhone"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              Street Address
              <input
                type="text"
                name="street"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              City
              <input
                type="text"
                name="city"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              State
              <input
                type="text"
                name="state"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              Zip Code
              <input
                type="text"
                name="zip"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              Email
              <input
                type="text"
                name="email"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              p101
              <input
                type="text"
                name="p101"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              s1
              <input
                type="text"
                name="s1"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              s2
              <input
                type="text"
                name="s2"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              s3
              <input
                type="text"
                name="s3"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              s4
              <input
                type="text"
                name="s4"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              p202
              <input
                type="text"
                name="p202"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              n1
              <input
                type="text"
                name="n1"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              n2
              <input
                type="text"
                name="n2"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              n3
              <input
                type="text"
                name="n3"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              n4
              <input
                type="text"
                name="n4"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              Bach
              <input
                type="text"
                name="bach"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              Certified
              <input
                type="text"
                name="certified"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              Seminars Taken
              <input
                type="text"
                name="seminarsTaken"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <div className="field">
            <label>
              Website
              <input
                type="text"
                name="website"
                onChange={e => updateValue(e)}
              ></input>
            </label>
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div>
        {/* <ul>
          {allTherapists.map(m => {
            return (
              <li>
                <p>{m.LastName}</p>
              </li>
            )
          })}
        </ul> */}
      </div>
    </section>
  )
}
