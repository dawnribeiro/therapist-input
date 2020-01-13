import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function UpdateTherapist(props) {
  const [specificTherapist, setSpecificTherapist] = useState([])

  const currentTherapist = props.match.params.id

  useEffect(() => {
    axios
      .get(
        `https://neurosomatic-therapist-api.herokuapp.com/api/Therapist/${currentTherapist}`
      )
      .then(resp => {
        setSpecificTherapist(resp.data)
      })
  }, [currentTherapist])

  const update = e => {
    e.preventDefault()
    const data = { ...specificTherapist }
    axios
      .put(
        `https://neurosomatic-therapist-api.herokuapp.com/api/Therapist/${currentTherapist}`,
        data
      )
      .then(resp => {
        setSpecificTherapist(resp.data)
        console.log(resp.data)
      })
  }

  const updateValue = e => {
    const name = e.target.name
    const value = e.target.value
    setSpecificTherapist(data => {
      data[name] = value
      return data
    })
  }

  return (
    <section>
      <div>
        <form className="ui equal width form" onSubmit={update}>
          <div className="fields">
            <div className="field">
              <label>
                First Name
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={specificTherapist.firstName}
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
                  placeholder="Last Name"
                  value={specificTherapist.lastName}
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
                  placeholder="Work Number"
                  value={specificTherapist.workPhone}
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
                  placeholder="Home Number"
                  value={specificTherapist.homePhone}
                  onChange={e => updateValue(e)}
                ></input>
              </label>
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <label>
                Street Address
                <input
                  type="text"
                  name="street"
                  placeholder="Street Address"
                  value={specificTherapist.street}
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
                  placeholder="City"
                  value={specificTherapist.city}
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
                  placeholder="State"
                  value={specificTherapist.state}
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
                  placeholder="Zip Code"
                  value={specificTherapist.zip}
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
                  placeholder="Email"
                  value={specificTherapist.email}
                  onChange={e => updateValue(e)}
                ></input>
              </label>
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <label>
                p101
                <input
                  type="text"
                  name="p101"
                  placeholder="p101"
                  value={specificTherapist.p101}
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
                  placeholder="s1"
                  value={specificTherapist.s1}
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
                  placeholder="s2"
                  value={specificTherapist.s2}
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
                  placeholder="s3"
                  value={specificTherapist.s3}
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
                  placeholder="s4"
                  value={specificTherapist.s4}
                  onChange={e => updateValue(e)}
                ></input>
              </label>
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <label>
                p202
                <input
                  type="text"
                  name="p202"
                  placeholder="p202"
                  value={specificTherapist.p202}
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
                  placeholder="n1"
                  value={specificTherapist.n1}
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
                  placeholder="n2"
                  value={specificTherapist.n2}
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
                  placeholder="n3"
                  value={specificTherapist.n3}
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
                  placeholder="n4"
                  value={specificTherapist.n4}
                  onChange={e => updateValue(e)}
                ></input>
              </label>
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <label>
                Bach
                <input
                  type="text"
                  name="bach"
                  placeholder="Bach"
                  value={specificTherapist.Bach}
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
                  placeholder="Certified"
                  value={specificTherapist.certified}
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
                  placeholder="Seminars Taken"
                  value={specificTherapist.seminarsTaken}
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
                  placeholder="Website"
                  value={specificTherapist.website}
                  onChange={e => updateValue(e)}
                ></input>
              </label>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </section>
  )
}
