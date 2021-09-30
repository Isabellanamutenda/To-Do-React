import React from "react"
import { NavLink } from "react-router-dom"

const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]

const Navbar = () => {
    return (
        <li key={link.id}>
          <NavLink to={link.path} activeClassName="active-link" exact>
            {link.text}
          </NavLink>
        </li>
      )
  
}
export default Navbar;