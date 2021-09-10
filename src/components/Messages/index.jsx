import React from "react";
import UserDialogItemComponent from "./small-components/UserDialogItemComponent";
import { UserDialogItems } from "./StyledComponents";

const Dialogs = (props) => {
  return (
    <UserDialogItems>
      {
        props.dialogItemData.map(({ id, userAvatarUrl, userName }) => (
          <UserDialogItemComponent id={id} userAvatarUrl={userAvatarUrl} userName={userName} />
        ))
      }
    </UserDialogItems>
  )
};

// Styled Components ====================================================================================================================================================================================================


export default Dialogs;