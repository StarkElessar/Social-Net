import React from "react";
import { NavMenu } from "./../StyledComponents";

const NavMenuComponent = (props) => {
  return (
    <NavMenu>
      <ul>
        <li><a href="https://google.com">Home</a></li>
        <li><a href="https://google.com">Newsfeed</a></li>
        <li><a href="https://google.com">Timeline</a></li>
        <li><a href="https://google.com">Contact</a></li>
      </ul>
    </NavMenu>
  )
};

export default NavMenuComponent;