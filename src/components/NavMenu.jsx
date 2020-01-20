import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <div className="ui secondary  menu">
      <Link to="/import" className="item active">
        Upload Therapist
      </Link>
      <Link to="/" className="item">
        Add New Therapist
      </Link>
      {/* <Link to="/updateTherapist/:id" className="item">
        Update Therapist
      </Link> */}
      {/* <a href= ""className="item active">New</a>
      <a href= "" className="item">Messages</a>
      <a href= ""className="item">Friends</a> */}
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <form>
              <label>
                <input type="text" name="name" placeholder="Search..." />
              </label>
            </form>
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
