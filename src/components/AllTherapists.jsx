import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function AllTherapists() {
  const [allTherapists, setAllTherapists] = useState([])
  const [therapist, setTherapist] = useState([])

  useEffect(() => {
    axios
      .get('https://neurosomatic-therapist-api.herokuapp.com/api/Therapist')
      .then(resp => {
        setAllTherapists(resp.data)
        console.log(resp.data)
      })
  }, [])

  const deleteTherapist = therapist => {
    let deletedTherapist = therapist.id
    axios
      .delete(
        `https://neurosomatic-therapist-api.herokuapp.com/api/Therapist/${deletedTherapist}`
      )
      .then(resp => {
        setTherapist(oldTherapists =>
          oldTherapists.filter(f => f.id !== therapist.id)
        )
        window.location.reload()
      })
  }

  return (
    <section>
      <ul>
        {allTherapists.map(therapist => {
          return (
            <li>
              <p>{therapist.lastName}</p>
              <button onClick={() => deleteTherapist(therapist)}>Delete</button>
              {/* <button>
                <Link to={'/updateTherapist/' + therapist.id}>Update</Link>
              </button> */}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
