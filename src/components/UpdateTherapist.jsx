import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function UpdateTherapist(props) {
  const [therapist, setTherapist] = useState([])

  const currentTherapist = props.match.params.id

  useEffect(() => {
    axios
      .get(
        `https://neurosomatic-therapist-api.herokuapp.com/api/Therapist/${currentTherapist}`
      )
      .then(resp => {
        setTherapist(resp.data)
      })
  }, [currentTherapist])

  const update = e => {
    e.preventDefault()
    const data = { ...therapist }
    axios
      .put(
        `https://neurosomatic-therapist-api.herokuapp.com/api/Therapist/${currentTherapist}`,
        data
      )
      .then(resp => {}, [])
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
        <form className="ui equal width form" onSubmit={update}>
          <div className="fields">
            <div className="field">
              <label>
                First Name
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={therapist.firstName}
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
                  value={therapist.lastName}
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
                  value={therapist.workPhone}
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
                  value={therapist.homePhone}
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
                  value={therapist.street}
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
                  value={therapist.city}
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
                  value={therapist.state}
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
                  value={therapist.zip}
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
                  value={therapist.email}
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
                  value={therapist.p101}
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
                  value={therapist.s1}
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
                  value={therapist.s2}
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
                  value={therapist.s3}
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
                  value={therapist.s4}
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
                  value={therapist.p202}
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
                  value={therapist.n1}
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
                  value={therapist.n2}
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
                  value={therapist.n3}
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
                  value={therapist.n4}
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
                  value={therapist.Bach}
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
                  value={therapist.certified}
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
                  value={therapist.seminarsTaken}
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
                  value={therapist.website}
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
