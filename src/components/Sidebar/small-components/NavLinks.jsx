import React from "react";

const NavLinks = (props) => {
  return (
    <li><a href={props.url}>{props.title}</a></li>
  )
};

export default NavLinks;