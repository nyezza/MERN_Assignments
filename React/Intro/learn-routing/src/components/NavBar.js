import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="nav-container">
      <Link to="/">Scribbble</Link>
      <nav className="nav">
        <Link to="/about">About</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/notes/new">New Note</Link>
      </nav>
    </div>
  )
}
export default NavBar