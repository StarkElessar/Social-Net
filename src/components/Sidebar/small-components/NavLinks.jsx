import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <li><NavLink to={props.url} activeClassName='active' >{props.title}</NavLink></li>
  )
};

export default NavLinks;