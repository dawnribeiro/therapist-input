import React, { useState } from 'react'
import Axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function Search() {
  const [therapist, setTherapist] = useState([])
  const [therapistLastName, setTherapistLastName] = useState([])

  const updateValue = e => {
    const name = e.target.name
    const value = e.target.value
    setTherapistLastName(data => {
      data[name] = value
      console.log(therapistLastName)
      return data
    })
  }

  const searchTherapist = e => {
    e.preventDefault()
    Axios.get(
      `https://neurosomatic-therapist-api.herokuapp.com/api/Therapist/lastName/${therapistLastName.name}`
    ).then(resp => {
      setTherapist(resp.data)
      console.log(resp.data, 'searching')
    })
  }

  return (
    <section>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <form onSubmit={searchTherapist}>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Search last name"
                  onChange={e => updateValue(e)}
                />
              </label>
            </form>
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
      <div>
        <ul>
          {therapist.map(t => {
            let last = t.lastName
            let wholeName = t.firstName && t.lastName
            return (
              <li>
                <p>
                  {t.firstName} {t.lastName}
                </p>
                {/* <p>{wholeName ? wholeName : 'Not found'}</p> */}
                <button>
                  <Link to={'/updateTherapist/' + t.id}>Update</Link>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
