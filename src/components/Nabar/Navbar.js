import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = ({ user }) => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/search">
            <li>Find a New Character</li>
          </Link>

          <Link to="/new">
            <li>Build a New Character</li>
          </Link>
        
            <li>
              {user && user.username !== undefined ? (
                <Link to={`/user/${user._id}`}>
                  <li>{user.username}</li>
                </Link>
              ) : (
                <Link to="/login">
                  <li>Login</li>
                </Link>
              )}
            </li>

            <li>
              {user && user.username !== undefined ? (
                <Link to="/">
                  <li>Logout</li>
                </Link>
              ) : (
                <Link to="/register">
                  <li>Register</li>
                </Link>
              )}
            </li>
         
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
