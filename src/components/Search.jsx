import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Search() {
  const [therapist, setTherapist] = useState({})
  const [therapistLastName, setTherapistLastName] = useState([])

  const updateValue = e => {
    const name = e.target.name
    const value = e.target.value
    setTherapist(data => {
      data[name] = value
      return data
    })
  }

  const searchTherapist = therapist => {
    let searching = therapist.lastName
    Axios.get(
      `https://neurosomatic-therapist-api.herokuapp.com/api/Therapist/lastName/${searching}`
    ).then(resp => {
      setTherapistLastName(resp.data)
      console.log(therapistLastName)
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
    </section>
  )
}
