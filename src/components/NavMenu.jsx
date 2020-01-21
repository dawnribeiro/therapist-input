import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <div className="ui secondary  menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/newTherapist" className="item">
        Add New Therapist
      </Link>
      <Link to="/import" className="item">
        Upload Therapist
      </Link>

      <Link to="/search" className="item">
        Search Therapist
      </Link>
      {/* <Link to="/updateTherapist/:id" className="item">
        Update Therapist
      </Link> */}
      {/* <a href= ""className="item active">New</a>
      <a href= "" className="item">Messages</a>
      <a href= ""className="item">Friends</a> */}
      {/* <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <form>
              <label>
                <input type="text" name="name" placeholder="Search..." onSubmit={search} />
              </label>
            </form>
            <i className="search link icon"></i>
          </div>
        </div>
      </div> */}
    </div>
  )
}
