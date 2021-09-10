import React from "react";
import { UserMessageWrapper, UserAvatar, UserBody } from './../StyledComponents';

const UserMessageComponent = (props) => {
  return (
    <UserMessageWrapper>
      <UserAvatar>
        <img src={props.userAvatarUrl} alt="user-avatar" />
      </UserAvatar>
      <UserBody>
        <h6>{props.userName}</h6>
        <p>
          {props.userTextMessage}
        </p>
      </UserBody>
    </UserMessageWrapper>
  )
};

export default UserMessageComponent;