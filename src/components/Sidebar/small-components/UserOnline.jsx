import React from "react";
import { UserAvatarImg, OnlineDot } from "../StyledComponents";

const UserOnline = (props) => {
  return (
    <li>
      <a href="https://google.com" title={props.titleLink}>
        <UserAvatarImg src={props.userAvatarUrl} alt="user" />
        <OnlineDot />
      </a>
    </li>
  )
};

export default UserOnline;