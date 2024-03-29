import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return(
      <nav className={`navbar navbar-expand-lg bg-${props.mode.backgroundColor} text-light`}>
        <div className="container-fluid">
          <Link to='/' className={`navbar-brand text-${props.mode.color}`}>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode.color}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode.color}`} to="/about">About</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input text-light" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className={`form-check-label text-${props.mode.color}`} htmlFor="flexSwitchCheckDefault">{props.mode.color==='dark'?"Enable Dark Mode":"Disable Dark Mode"}</label>
            </div>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {
  title: PropTypes.string,
}

Navbar.defaultProps= {
  title:"Heading"
}