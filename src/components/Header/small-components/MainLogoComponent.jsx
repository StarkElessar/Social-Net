import React from "react";
import { MainLogo } from "./../StyledComponents";
import logo from './../img/logo.png';

const MainLogoComponent = (props) => {
  return (
    <MainLogo href="https://google.com">
      <img src={logo} alt="logo" />
      <span>SocialFor.</span>
    </MainLogo>
  )
};

export default MainLogoComponent;