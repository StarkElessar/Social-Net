import React from "react";
import { UserDialogItem, Avatar, UserName, BtnDel, TextDelDialog } from './../StyledComponents';

const UserDialogItemComponent = (props) => {
  return (
    <UserDialogItem to={'/dialogs/' + props.id}>
      <Avatar>
        <img src={props.userAvatarUrl} alt="user-avatar" />
      </Avatar>
      <UserName>{props.userName}</UserName>
      <BtnDel>
        <TextDelDialog>
          <span>Удалить чат</span>
        </TextDelDialog>
      </BtnDel>
    </UserDialogItem>
  )
};

export default UserDialogItemComponent;